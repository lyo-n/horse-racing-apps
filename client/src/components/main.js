import React, { useEffect, useState } from "react";
import "./styled.css";
import io from "socket.io-client";

function Main() {
    const [res, setRes] = useState("response");
    const [leader, setLeaderName] = useState([]);

    useEffect(() => {
        const socket = io.connect(process.env.REACT_APP_API_URL);
        socket.emit("start");
        let leaderBoard = [];
        socket.on("ticker", function (response) {
            const res = Array.isArray(response) ? response : [response];
            setRes(res);

            const sizeResponse = res.length;
            res.forEach((element, n) => {
                if (
                    element.distance == 1000 &&
                    leaderBoard.length < sizeResponse &&
                    !leaderBoard.some((e) => e.name === element.name)
                ) {
                    leaderBoard.push(element);
                    setLeaderName(leaderBoard);
                }
            });
        });
    }, []);

    const res0 = res[0].distance;
    const res1 = res[1].distance;
    const res2 = res[2].distance;
    const res3 = res[3].distance;
    const res4 = res[4].distance;
    const res5 = res[5].distance;

    return (
        <div>
            <div className="skills">
                <div className="skills-bar">
                    <div className="bar">
                        <div className="info">
                            <span style={{ color: "red" }}>{res[0].name}</span>
                        </div>
                        <div className="progress-line">
                            <span style={{ width: res0/2, background: "red" }}>
                                <div style={{ color: "red" }}>{res0}</div>
                            </span>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span style={{ color: "green" }}>{res[1].name}</span>
                            </div>
                            <div className="progress-line">
                                <span style={{ width: res1/2, background: "green" }}>
                                    <div style={{ color: "green" }}>{res1}</div>
                                </span>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span style={{ color: "blue" }}>{res[2].name}</span>
                                </div>
                                <div className="progress-line">
                                    <span style={{ width: res2/2, background: "blue" }}>
                                        <div style={{ color: "blue" }}>{res2}</div>
                                    </span>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span style={{ color: "orange" }}>{res[3].name}</span>
                                    </div>
                                    <div className="progress-line">
                                        <span style={{ width: res3/2, background: "orange" }}>
                                            <div style={{ color: "orange" }}>{res3}</div>
                                        </span>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span style={{ color: "pink" }}>{res[4].name}</span>
                                        </div>
                                        <div className="progress-line">
                                            <span style={{ width: res4/2, background: "pink" }}>
                                                <div style={{ color: "pink" }}>{res4}</div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span style={{ color: "purple" }}>{res[5].name}</span>
                                        </div>
                                        <div className="progress-line">
                                            <span style={{ width: res5/2, background: "purple" }}>
                                                <div style={{ color: "purple" }}>{res5}</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <h1>Leaderboard</h1>
            {leader.map((element, index) => {
                return (
                    <ul className= "leaderboard"key={index}>
                        <li>
                            {index + 1}. {element.name}
                        </li>
                    </ul>
                );
            })}
        </div>
    );
}

export default Main;
