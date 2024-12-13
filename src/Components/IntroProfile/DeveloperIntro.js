import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DeveloperIntro.scss';

const DeveloperIntro = ({ fadeOut, setFadeOut, lines, typingSpeed = 15 }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [lineIndex, setLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            const currentWord = currentLine[wordIndex];

            const interval = setInterval(() => {
                if (charIndex < currentWord.text.length) {
                    // Thêm từng chữ của từ hiện tại
                    setCurrentText((prev) => [
                        ...prev,
                        {
                            text: currentWord.text[charIndex],
                            color: currentWord.color,
                        },
                    ]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        // Chuyển sang từ tiếp theo hoặc dòng tiếp theo
                        if (wordIndex + 1 < currentLine.length) {
                            setCurrentText((prev) => [
                                ...prev,
                                { text: "", color: currentWord.color }, // Dấu cách giữa các từ
                            ]);
                            setWordIndex((prev) => prev + 1);
                            setCharIndex(0);
                        } else {
                            // Khi hoàn thành dòng, lưu dòng vào danh sách hiển thị
                            setDisplayedLines((prev) => [
                                ...prev,
                                currentText.map((char, i) => (
                                    <span key={i} style={{ color: char.color }}>
                                        {char.text}
                                    </span>
                                )),
                            ]);
                            setCurrentText([]);
                            setWordIndex(0);
                            setCharIndex(0);
                            setLineIndex((prev) => prev + 1);
                        }
                    }, typingSpeed); // Độ trễ giữa các dòng
                }
            }, typingSpeed);

            return () => clearInterval(interval);
        } else {
            setIsTypingComplete(true); // Đánh dấu hoàn tất gõ
        }
    }, [lineIndex, wordIndex, charIndex, lines, currentText, typingSpeed]);

    // Hiệu ứng nhấp nháy con trỏ
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    // Kích hoạt hiệu ứng mờ dần sau khi hoàn thành gõ
    useEffect(() => {
        if (isTypingComplete) {
            setTimeout(() => {
                setFadeOut(true);
            }, 500); // Thời gian chờ trước khi mờ dần
        }
    }, [isTypingComplete, setFadeOut]);

    // Nếu đã mờ dần, không hiển thị component
    if (fadeOut) {
        return null;
    }

    return (
        <motion.div
            className="developer-intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="developer-intro__content">
                {/* Hiển thị các dòng đã gõ */}
                {displayedLines.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                {/* Hiển thị dòng hiện tại đang gõ */}
                {lineIndex < lines.length && (
                    <div>
                        {currentText.map((char, i) => (
                            <span key={i} style={{ color: char.color }}>
                                {char.text}
                            </span>
                        ))}
                        {showCursor && (
                            <span
                                style={{
                                    borderLeft: "2px solid white",
                                    marginLeft: "2px",
                                    display: "inline-block",
                                    height: "1em",
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default DeveloperIntro;
