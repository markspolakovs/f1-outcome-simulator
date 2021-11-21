import React, { useState } from 'react';
import './App.css';

type Position = 
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11;

const ALL_POSITIONS: Position[] = [1,2,3,4,5,6,7,8,9,10, 11];

// position, fastest lap
type Outcome = [Position, boolean];

const ALL_OUTCOMES: Outcome[] = ALL_POSITIONS.flatMap(x => [[x, false], x < 11 ? [x, true] : false].filter(Boolean) as Outcome[]);

const POS_POINTS: {[k in Position]: number} = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
  11: 0
};
const FASTEST_LAP_POINTS = 1;

function outcomePoints(out: Outcome): number {
  return POS_POINTS[out[0]] + (out[1] ? FASTEST_LAP_POINTS : 0);
}

function outcomeToString(out: Outcome): string {
  let value = "P" + out[0].toString(10);
  if (out[0] === 11) {
    value = "P11 or lower";
  }
  if (out[1]) {
    value += " + fastest lap";
  }
  return value;
}

function calculatePossibleOutcomes(d1Points: number, d2Points: number) {
  const d1WinningOutcomes: [Outcome, Outcome][] = [];
  const d2WinningOutcomes: [Outcome, Outcome][] = [];
  const drawOutcomes: [Outcome, Outcome][] = [];
  const d1WinningResults = new Set<number>();
  const d2WinningResults = new Set<number>();
  for (const d1Outcome of ALL_OUTCOMES) {
    for (const d2Outcome of ALL_OUTCOMES) {
      if ((d1Outcome[0] !== d2Outcome[0]) || (d1Outcome[0] === 11 && d2Outcome[0] === 11)) {
        const d1FinalPoints = d1Points + outcomePoints(d1Outcome);
        const d2FinalPoints = d2Points + outcomePoints(d2Outcome);
        if (d1FinalPoints > d2FinalPoints && !d1WinningResults.has(d1Outcome[0])) {
          d1WinningOutcomes.push([d1Outcome, d2Outcome]);
          d1WinningResults.add(d1Outcome[0]);
        } else if (d2FinalPoints > d1FinalPoints && !d2WinningResults.has(d2Outcome[0])) {
          d2WinningOutcomes.push([d2Outcome, d1Outcome]);
          d2WinningResults.add(d2Outcome[0]);
        } else if (d1FinalPoints === d2FinalPoints) {
          drawOutcomes.push([d1Outcome, d2Outcome]);
        }
      }
    }
  }
  return {
    d1WinningOutcomes,
    d2WinningOutcomes,
    drawOutcomes
  };
}

const hamInitial = 343.5;
const verInitial = 351.5;

function App() {
  const [saResultHam, setSaResultHam] = useState<Outcome>([2, true]);
  const [saResultVer, setSaResultVer] = useState<Outcome>([1, false]);
  const abuResults = calculatePossibleOutcomes(hamInitial + outcomePoints(saResultHam), verInitial + outcomePoints(saResultVer));
  return (
    <div className="App">
      <header>
        <h1>2021 F1 Championship simulator</h1>
      </header>
      <div>
        <h2>Standings after Qatar:</h2>
        Hamilton: {hamInitial}, Verstappen: {verInitial}
      </div>
      <div>
        <h2>Saudi Arabia results</h2>
        <div>
          <b>Hamilton</b>:
          <select value={saResultHam[0].toString(10)} onChange={e => setSaResultHam(old => [parseInt(e.target.value) as Position, old[1]])}>
            {ALL_POSITIONS.map(pos => <option value={pos.toString(10)}>{pos}</option>)}
          </select>
          <label>
            <input type="checkbox" checked={saResultHam[1]} onChange={e => setSaResultHam(old => [old[0], e.target.checked])} />
            Fastest Lap
          </label>
          &nbsp;({hamInitial + outcomePoints(saResultHam)} points)
        </div>
        <div>
          <b>Verstappen</b>:
          <select value={saResultVer[0].toString(10)} onChange={e => setSaResultVer(old => [parseInt(e.target.value) as Position, old[1]])}>
            {ALL_POSITIONS.map(pos => <option value={pos.toString(10)}>{pos}</option>)}
          </select>
          <label>
            <input type="checkbox" checked={saResultVer[1]} onChange={e => setSaResultVer(old => [old[0], e.target.checked])} />
            Fastest Lap
          </label>
          &nbsp;({verInitial + outcomePoints(saResultVer)} points)
        </div>
      </div>
      <div>
        <h2>Results after Abu Dhabi:</h2>
        <h3>Hamilton wins the title if&hellip;</h3>
        <ul>
        {abuResults.d1WinningOutcomes.map((out) => <li key={outcomeToString(out[0]) + outcomeToString(out[1])}>
          he finishes <em>{outcomeToString(out[0])}</em> and Verstappen finishes <em>{outcomeToString(out[1])}</em> or below
          &nbsp;({hamInitial + outcomePoints(saResultHam) + outcomePoints(out[0])} / {verInitial + outcomePoints(saResultVer) + outcomePoints(out[1])} points)
        </li>)}
        </ul>
        <h3>Verstappen wins the title if&hellip;</h3>
        <ul>
        {abuResults.d2WinningOutcomes.map((out) => <li key={outcomeToString(out[0]) + outcomeToString(out[1])}>
          he finishes <em>{outcomeToString(out[0])}</em> and Hamilton finishes <em>{outcomeToString(out[1])}</em> or below
          &nbsp;({verInitial + outcomePoints(saResultVer) + outcomePoints(out[0])} / {hamInitial + outcomePoints(saResultHam) + outcomePoints(out[1])} points)
        </li>)}
        </ul>
        <h3>Tied if&hellip;</h3>
        <ul>
        {abuResults.drawOutcomes.map((out) => <li key={outcomeToString(out[0]) + outcomeToString(out[1])}>
          Hamilton finishes <em>{outcomeToString(out[0])}</em> and Verstappen finishes <em>{outcomeToString(out[1])}</em>
          &nbsp;({hamInitial + outcomePoints(saResultHam) + outcomePoints(out[0])} / {verInitial + outcomePoints(saResultVer) + outcomePoints(out[1])} points)
        </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
