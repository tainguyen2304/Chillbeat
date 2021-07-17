import { Line } from 'react-chartjs-2';
import { useTranslation } from "react-i18next";

function ChartLine(props) {
    const { t } = useTranslation()
    const label = [
        t("January"),
        t("February"),
        t("March"),
        t("April"),
        t("May"),
        t("June"),
        t("July"),
        t("August"),
        t("Septemper"),
        t("Octoper"),
        t("November"),
        t("December"),
    ]
    function randomData() {
        let data = []
        for (let i = 0; i < label.length; i++) {
            const number = Math.floor(Math.random() * 100)
            data.push(number)
        }
        return data;
    }


    const data = {
        labels: label,
        datasets: [
            {
                label: 'Man',
                fill: true,
                data: randomData(),
                backgroundColor: 'rgba(250, 223, 173, 0.512)',
                borderColor: 'rgba(250, 223, 173, 0.512)',
                tension: 1,

            },
            {
                label: 'Woman',
                data: randomData(),
                fill: true,
                backgroundColor: 'rgba(247, 147, 247, 0.477)',
                borderColor: 'rgba(247, 147, 247, 0.477)',
                tension: 1,
            },

        ]
    };
    return (
        <div className="ChartLine box ">
            <div className="px-2 py-3">
                <div className="title">
                    <p className="font-weight-bold m-0">
                        {t("Title ChartLine")}
                    </p>
                </div>
            </div>
            <hr />
            <div className="p-2">
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    }
                                }
                            ],
                            myScale: {
                                type: 'logarithmic',
                                position: 'right', // `axis` is determined by the position as `'y'`
                            },
                        },

                    }} />
            </div>
        </div>
    );
}

export default ChartLine;