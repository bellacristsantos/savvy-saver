import chartconfig from "./chartconfig";
import { Line } from "react-chartjs-2";
import ChartJS from 'chart.js/auto';
import { TimeScale } from 'chart.js';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import {getClosingPrices} from '../../utilities/timeTravelUtil';

ChartJS.register(TimeScale)

function LineChart({ ChartData }) {
  console.log('chartdata',ChartData)
  const Data = getClosingPrices(ChartData)

  chartconfig.data.labels = Data.map((item) => item.date)
  chartconfig.data.datasets[0].data = Data.map((item) => item.closing)
  chartconfig.data.datasets[0].label = 'Closing Prices'
  chartconfig.options.plugins.title.text = `${ChartData[1].toUpperCase()} Closing Prices for the last year`

  return (
      <Line
        data={chartconfig.data}
        options={chartconfig.options}
      ></Line>
  )
}

export default LineChart
