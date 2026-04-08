import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const CAT_COLORS = {
  food:          '#ff6b6b',
  housing:       '#4ecdc4',
  utilities:     '#45b7d1',
  transport:     '#82ca9d',
  entertainment: '#f9ca24',
  salary:        '#a29bfe',
  other:         '#fd79a8',
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0].payload;
  const color = CAT_COLORS[name] || '#8892aa';
  return (
    <div style={{
      background: '#1c2232',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 9,
      padding: '10px 14px',
    }}>
      <p style={{ color, fontSize: 11, fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 4 }}>
        {name}
      </p>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 16, color: '#e8eaf2' }}>
        ${value.toFixed(2)}
      </p>
    </div>
  );
};

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: '#4a5370', fontSize: 12, fontFamily: 'DM Sans' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fill: '#4a5370', fontSize: 12, fontFamily: 'DM Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={52}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={CAT_COLORS[entry.name] || '#8892aa'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
