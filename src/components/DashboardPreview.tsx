import './DashboardPreview.css'

function DashboardPreview() {
  return (
    <div className="dash">
      <article className="dash__panel dash__panel--main">
        <header className="dash__header">
          <h2>Operations Overview</h2>
          <span>Last 30 days</span>
        </header>

        <div className="dash__metrics">
          <Metric label="Revenue Impact" value="$48.2K" delta="+18%" tone="up" />
          <Metric label="Active Workflows" value="27" delta="+6" tone="up" />
          <Metric label="Automation Rate" value="64%" delta="+12%" tone="up" />
        </div>

        <div className="dash__chart">
          <div className="dash__chart-head">
            <span>Operational Performance</span>
            <span>Monthly</span>
          </div>
          <svg className="dash__chart-svg" viewBox="0 0 420 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(110, 168, 255, 0.35)" />
                <stop offset="100%" stopColor="rgba(110, 168, 255, 0)" />
              </linearGradient>
            </defs>
            <path
              className="dash__chart-area"
              d="M0 110 C40 105, 70 95, 100 88 C140 78, 160 92, 200 70 C240 48, 270 58, 310 42 C350 26, 380 34, 420 18 L420 140 L0 140 Z"
              fill="url(#chartFill)"
            />
            <path
              className="dash__chart-line"
              d="M0 110 C40 105, 70 95, 100 88 C140 78, 160 92, 200 70 C240 48, 270 58, 310 42 C350 26, 380 34, 420 18"
              fill="none"
              stroke="#7eb4ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </article>

      <aside className="dash__side">
        <article className="dash__panel">
          <h3>Workflow Health</h3>
          <ul className="dash__list">
            <StatusItem label="Client Onboarding" status="Healthy" tone="success" />
            <StatusItem label="Project Delivery" status="At Risk" tone="warning" />
            <StatusItem label="Invoice Processing" status="Healthy" tone="success" />
            <StatusItem label="Reporting Pipeline" status="Healthy" tone="success" />
          </ul>
        </article>

        <article className="dash__panel">
          <h3>Efficiency Opportunities</h3>
          <ul className="dash__list">
            <StatusItem label="Manual Data Entry" status="High Impact" tone="accent" />
            <StatusItem label="Approval Bottlenecks" status="Medium" tone="warning" />
            <StatusItem label="Duplicate Work" status="High Impact" tone="accent" />
          </ul>
        </article>
      </aside>
    </div>
  )
}

function Metric({
  label,
  value,
  delta,
  tone,
}: {
  label: string
  value: string
  delta: string
  tone: 'up' | 'down'
}) {
  return (
    <div className="dash__metric">
      <span className="dash__metric-label">{label}</span>
      <strong className="dash__metric-value">{value}</strong>
      <span className={`dash__metric-delta dash__metric-delta--${tone}`}>{delta}</span>
    </div>
  )
}

function StatusItem({
  label,
  status,
  tone,
}: {
  label: string
  status: string
  tone: 'success' | 'warning' | 'accent'
}) {
  return (
    <li className="dash__item">
      <span className={`dash__dot dash__dot--${tone}`} />
      <span className="dash__item-label">{label}</span>
      <span className={`dash__item-status dash__item-status--${tone}`}>{status}</span>
    </li>
  )
}

export default DashboardPreview
