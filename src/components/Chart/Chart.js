import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.monthlyExpenses.map(monthExp => monthExp.value);
  const maxExpense = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.monthlyExpenses.map((monthExp) => (
        <ChartBar
          key={monthExp.label}
          value={monthExp.value}
          maxValue={maxExpense}
          label={monthExp.label}
        />
      ))}
    </div>
  );
}
