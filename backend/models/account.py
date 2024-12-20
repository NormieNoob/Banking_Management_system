from . import db
from datetime import datetime

class Account(db.Model):
    __tablename__ = 'account'

    AccountID = db.Column(db.String(50), primary_key=True)
    AccountType = db.Column(db.String(50), nullable=False)
    InterestRate = db.Column(db.Float)
    DateCreated = db.Column(db.Date, default=datetime.utcnow)
    UserID = db.Column(db.String(50), db.ForeignKey('user.UserID'), nullable=False)
    # BranchID = db.Column(db.String(50), db.ForeignKey('branch.BranchID'), nullable=False)

    # Relationships
    balance = db.relationship('Balance', backref='account', uselist=False, lazy=True)
    outgoing_transactions = db.relationship('Transaction',
                                         foreign_keys='Transaction.FromAccountID',
                                         backref='from_account', 
                                         lazy=True)
    incoming_transactions = db.relationship('Transaction',
                                         foreign_keys='Transaction.ToAccountID',
                                         backref='to_account', 
                                         lazy=True)
    # credit_cards_billing = db.relationship('CreditCard',
    #                                      backref='billing_account', lazy=True)

    def get_all_transactions(self):
        """Get both incoming and outgoing transactions for this account"""
        all_transactions = []
        
        # Add outgoing transactions with negative amounts
        for transaction in self.outgoing_transactions:
            transaction_dict = transaction.to_dict()
            transaction_dict['Amount'] = -abs(float(transaction_dict['Amount']))
            all_transactions.append(transaction_dict)
            
        # Add incoming transactions with positive amounts
        for transaction in self.incoming_transactions:
            transaction_dict = transaction.to_dict()
            transaction_dict['Amount'] = abs(float(transaction_dict['Amount']))
            all_transactions.append(transaction_dict)
            
        # Sort by date, most recent first
        return sorted(all_transactions, 
                     key=lambda x: x['TransactionDate'], 
                     reverse=True)