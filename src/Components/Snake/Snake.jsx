import React, { useEffect, useRef, useState } from "react";
import styles from "./Snake.module.css";

export const Snake = () => {
  const boardRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState("right");
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [delay, setDelay] = useState(200);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (!gameStarted && (e.code === "Space" || e.key === " ")) {
        startGame();
      } else {
        switch (e.key) {
          case "ArrowUp": setDirection("up"); break;
          case "ArrowDown": setDirection("down"); break;
          case "ArrowLeft": setDirection("left"); break;
          case "ArrowRight": setDirection("right"); break;
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      timeoutRef.current = setTimeout(() => {
        move();
        draw();
      }, delay);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [snake, direction, gameStarted]);

  function generateFood() {
    const x = Math.floor(Math.random() * 20) + 1;
    const y = Math.floor(Math.random() * 20) + 1;
    return { x, y };
  }

  function startGame() {
    setGameStarted(true);
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection("right");
    setScore(0);
    setDelay(200);
  }

  function move() {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    switch (direction) {
      case "up": head.y--; break;
      case "down": head.y++; break;
      case "left": head.x--; break;
      case "right": head.x++; break;
    }
    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      increaseSpeed();
      setScore((prev) => prev + 1);
    } else {
      newSnake.pop();
    }

    if (checkCollision(head, newSnake)) {
      resetGame();
    } else {
      setSnake(newSnake);
    }
  }

  function increaseSpeed() {
    setDelay((prev) => Math.max(25, prev - (prev > 150 ? 5 : prev > 100 ? 3 : 1)));
  }

  function checkCollision(head, body) {
    if (head.x < 1 || head.x > 20 || head.y < 1 || head.y > 20) return true;
    return body.slice(1).some((seg) => seg.x === head.x && seg.y === head.y);
  }

  function resetGame() {
    if (score > highScore) setHighScore(score);
    setGameStarted(false);
  }

  function draw() {
    const board = boardRef.current;
    if (board) {
      board.innerHTML = "";
      snake.forEach((segment) => {
        const el = document.createElement("div");
        el.className = styles.snake;
        el.style.gridColumn = segment.x;
        el.style.gridRow = segment.y;
        board.appendChild(el);
      });
      if (gameStarted) {
        const el = document.createElement("div");
        el.className = styles.food;
        el.style.gridColumn = food.x;
        el.style.gridRow = food.y;
        board.appendChild(el);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Snake Game</h2>
        {!gameStarted && <p className={styles.instructions}>Press SPACE to start</p>}
        <div className={styles.scores}>
          <span>Score: {score.toString().padStart(3, '0')}</span>
          <span>High Score: {highScore.toString().padStart(3, '0')}</span>
        </div>
      </div>
      <div className={styles.board} id="game-board" ref={boardRef}></div>
    </div>
  );
};