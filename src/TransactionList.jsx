import { useState } from 'react'

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

const CAT_COLORS = {
  food:          { bg: 'rgba(255,107,107,0.14)', color: '#ff6b6b' },
  housing:       { bg: 'rgba(78,205,196,0.14)',  color: '#4ecdc4' },
  utilities:     { bg: 'rgba(69,183,209,0.14)',  color: '#45b7d1' },
  transport:     { bg: 'rgba(150,206,180,0.14)', color: '#82ca9d' },
  entertainment: { bg: 'rgba(249,202,36,0.14)',  color: '#f9ca24' },
  salary:        { bg: 'rgba(162,155,254,0.14)', color: '#a29bfe' },
  other:         { bg: 'rgba(253,121,168,0.14)', color: '#fd79a8' },
};

function TransactionList({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filtered = transactions;
  if (filterType !== "all") filtered = filtered.filter(t => t.type === filterType);
  if (filterCategory !== "all") filtered = filtered.filter(t => t.category === filterCategory);

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <div className="filters">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => {
            const c = CAT_COLORS[t.category] || { bg: 'rgba(255,255,255,0.08)', color: '#8892aa' };
            return (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td style={{ color: 'var(--text)' }}>{t.description}</td>
                <td>
                  <span className="cat-badge" style={{ background: c.bg, color: c.color }}>
                    {t.category}
                  </span>
                </td>
                <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
                  {t.type === "income" ? "+" : "−"}${t.amount.toLocaleString()}
                </td>
                <td>
                  <button className="delete-btn" onClick={() => {
                    if (window.confirm("Delete this transaction?")) onDelete(t.id);
                  }}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList
