const DashboardWidget = ({ title, icon, value, color = "bg-primary" }) => {
  return (
    <div className="card primary">
      <div className="card-body d-flex align-items-center">
        <div className={`me-3 text-white ${color} p-3`}>
          <i className={`fa fa-${icon} fa-2x`}></i>
        </div>
        <div>
          <h4 className="text-value text-secondary">{value}</h4>
          <div className="text-muted text-uppercase font-weight-bold small">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
