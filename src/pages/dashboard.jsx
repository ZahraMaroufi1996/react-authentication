import Chart from 'components/dashboard/Chart'
import DashboardWidget from 'components/dashboard/DashboardWidget'
import EmployeesChart from 'components/dashboard/EmployeesChart'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد فروش"
            icon="shopping-cart"
            value="123"
            color="bg-primary"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="مبلغ فروش"
            icon="shopping-cart"
            value="123,000"
            color="bg-warning"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد محصولات"
            icon="shopping-cart"
            value="12"
            color="bg-danger"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <EmployeesChart />
        </div>
        <div className="col-md-6">
          <Chart />
        </div>
      </div>
    </>
  )
}

export default Dashboard
