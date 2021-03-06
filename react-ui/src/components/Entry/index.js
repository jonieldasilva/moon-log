import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import info from "../../media/info.png";
import add from "../../media/add.png";
import close from "../../media/close.png";
import "./index.css";

class Entry extends Component {
  state = {
    entryShown: false,
    coin: "ETH",
    enter: 0.1,
    exit: 0.2,
    ta: "",
    gut: "",
    unexpected: "",
    nextImprove: "",
    wentWell: "",
    learned: "",
    step: 1
  };

  enterTrade = e => {
    // TODO: save trade entrance and set up for trade exit
    // - upload draft to database
    // - get callback from database entry, store id
    // - add this to state.openTrades
    this.setState({
      step: 2
    });
  };

  exitTrade = e => {
    // TODO: update entered trade with exit details && complete
    this.setState({
      step: 1,
      entryShown: false
    });
  };

  render() {
    return this.state.step === 1 ? (
      <div className="form">
        <div className="title">
          <h3>Enter Trade</h3>
          <img
            alt="information icon"
            className="info-icon"
            src={info}
            data-tip="hello world"
          />
          {this.state.entryShown ? (
            <button
              className="transparent"
              onClick={() =>
                this.setState({
                  entryShown: false
                })}
            >
              <img alt="close" className="close-icon" src={close} />
            </button>
          ) : (
            <button
              className="transparent"
              onClick={() =>
                this.setState({
                  entryShown: true
                })}
            >
              <img alt="add" className="add-icon" src={add} />
            </button>
          )}
        </div>
        <ReactTooltip type="light" className="info" place="bottom">
          Please fill out the following fields below to record your trade
          journal entry. The "Why" and "Learn" input fields can be formatted
          with{" "}
          <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
            Markdown
          </a>!
        </ReactTooltip>
        {this.state.entryShown ? (
          <div className="body">
            <p>
              <label>Coin: </label>
              <input
                className="coin-input"
                maxLength="8"
                type="text"
                onChange={e =>
                  this.setState({
                    coin: e.target.value
                  })}
                value={this.state.coin}
              />
            </p>
            <p>
              <label>Investment: </label>
              <input
                type="number"
                onChange={e =>
                  this.setState({
                    investment: e.target.value
                  })}
                value={this.state.enter}
              />
            </p>
            <p>
              <label>What was your gut feeling on entering?</label>
              <textarea
                placeholder="Butterflies"
                onChange={e =>
                  this.setState({
                    why: e.target.value
                  })}
                value={this.state.gut}
              />
            </p>
            <p>
              <label>What technical indicators did you observe?</label>
              <textarea
                placeholder="I bought in just before the Golden Cross..."
                onChange={e =>
                  this.setState({
                    why: e.target.value
                  })}
                value={this.state.ta}
              />
            </p>
            <p>
              <label>What other things prompted this trade?</label>
              <textarea
                placeholder="Tradingview charts, twitter links, etc..."
                onChange={e =>
                  this.setState({
                    why: e.target.value
                  })}
                value={this.state.other}
              />
            </p>
            <p>
              <button className="green" onClick={this.enterTrade}>
                Enter Trade
              </button>
            </p>
          </div>
        ) : null}
      </div>
    ) : (
      <div className="form">
        <div className="title">
          <h3>Exit Trade</h3>
          <img
            alt="information icon"
            className="info-icon"
            src={info}
            data-tip="hello world"
          />
        </div>
        <ReactTooltip type="light" className="info" place="bottom">
          Please fill out the following fields below to record your trade
          journal entry. The "Why" and "Learn" input fields can be formatted
          with{" "}
          <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
            Markdown
          </a>!
        </ReactTooltip>
        {this.state.entryShown ? (
          <div className="body">
            <p>
              <label>ROI: </label>
              <input
                type="number"
                onChange={e =>
                  this.setState({
                    roi: e.target.value
                  })}
                value={this.state.roi}
              />
            </p>
            <p>
              <label>What went well?</label>
              <textarea
                placeholder="You know, I made a lot of fucking money..."
                onChange={e =>
                  this.setState({
                    wentWell: e.target.value
                  })}
                value={this.state.wentWell}
              />
            </p>
            <p>
              <label>What will you do better next time?</label>
              <textarea
                placeholder="I think I could have gotten out earlier with more profit..."
                onChange={e =>
                  this.setState({
                    nextImprove: e.target.value
                  })}
                value={this.state.nextImprove}
              />
            </p>
            <p>
              <label>Did anything happen unexpectedly?</label>
              <textarea
                placeholder="Well out of nowhere..."
                onChange={e =>
                  this.setState({
                    unexpected: e.target.value
                  })}
                value={this.state.unexpected}
              />
            </p>
            <p>
              <button className="green" onClick={this.exitTrade}>
                Complete Trade
              </button>
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Entry;
