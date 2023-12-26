import { Loading } from 'components'
import React, { useEffect, useState } from 'react'
import { getChart } from 'services/api'
import Chart from './Chart'

const EmployeesChart = () => {
  const [employeesChart, setEmployeesChart] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getChart()
      .then(({ data: { data } }) => {
        const labels = []
        const salary = []
        const age = []

        data.forEach((item) => {
          labels.push(item.employee_name)
          salary.push(item.employee_salary)
          age.push(item.employee_age)
        })
        setEmployeesChart({
          labels,
          datasets: [
            {
              label: 'Salary',
              data: salary,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
            },
            {
              label: 'Age',
              data: salary,
              fill: age,
              backgroundColor: 'rgb(15, 99, 132)',
            },
          ],
        })
        setIsLoading(false)
      })
      .catch((err) => console.error({ err }))
  }, [])
  return isLoading ? <Loading /> : <Chart data={employeesChart} />
}

export default EmployeesChart
