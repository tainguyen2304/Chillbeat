import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from "react-i18next";

function randomData() {
  let data = []
  for (let i = 0; i < 4; i++) {
    const number = Math.floor(Math.random() * 100)
    data.push(number)
  }
  return data;
}
const dataRandom = randomData();
const sumRandom = dataRandom.reduce((a, b) => a + b);
const phanTramData = dataRandom.map(item => (item / sumRandom * 100).toFixed(1))
const bgColor = [
  'rgba(255, 99, 132, 0.4)',
  'rgba(54, 162, 235, 0.4)',
  'rgba(255, 206, 86, 0.4)',
  'rgba(115, 192, 120, 0.4)',
]
const data = {
  labels: ['Spain', 'United Kingdom', 'EEUU', 'Italy'],
  datasets: [
    {
      data: dataRandom,
      backgroundColor: bgColor,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      clip: { left: 5, top: false, right: -2, bottom: 0 },
      hoverOffset: 4,
      hoverBorderWidth: 4,
    },
  ],
};

const Stream = () => {
  const { t } = useTranslation();
  return (
    <div className="Stream box d-flex flex-column justify-content-between">
      <div>
        <div className='title px-2 py-3'>
          <p className="fw-bold m-0 ">{t("Streams by countries")}</p>
        </div>
        <hr />
        <div className="pt-5 ">
          <Doughnut
            width={100}
            data={data}
          />
        </div>
      </div>
      <div className='row pe-5 ps-3'>
        <div className="col-2">
          {
            bgColor.map((color,index) => (
              <p  key={index} style={{ backgroundColor: color, padding: '.5rem' }}></p>
            ))
          }
        </div>
        <div className="col-8">
          {data.labels.map((label,index) => (
            <p key={index}> {label}</p>
          ))}
        </div>
        <div className="col-2 fw-bold">
          {phanTramData.map((data,index) => (
            <p key={index}> {data}%</p>
          ))}
        </div>
      </div>
      <div className='show-more'>{t("Show more")}</div>
    </div>
  )
};

export default Stream;