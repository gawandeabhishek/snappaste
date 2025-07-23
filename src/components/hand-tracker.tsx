// components/hand-tracker.tsx
"use client";

import { useEffect, useRef } from "react";
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";

interface HandTrackerProps {
  onGesture: (gesture: "copy" | "paste") => void;
}

const HandTracker = ({ onGesture }: HandTrackerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevGesture = useRef<string | null>(null);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      const model = await handpose.load();
      detect(model);
    };

    const detect = async (model: handpose.HandPose) => {
      if (!videoRef.current) return;

      const predictLoop = async () => {
        const predictions = await model.estimateHands(videoRef.current!);
        if (predictions.length > 0) {
          const landmarks = predictions[0].landmarks;

          // Simple grab and open palm detection logic
          const thumbTip = landmarks[4];
          const indexTip = landmarks[8];
          const middleTip = landmarks[12];

          const distance = (a: number[], b: number[]) =>
            Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);

          const thumbIndex = distance(thumbTip, indexTip);
          const thumbMiddle = distance(thumbTip, middleTip);

          if (thumbIndex < 50 && thumbMiddle < 50) {
            if (prevGesture.current !== "grab") {
              onGesture("copy");
              prevGesture.current = "grab";
            }
          } else if (thumbIndex > 80 && thumbMiddle > 80) {
            if (prevGesture.current !== "palm") {
              onGesture("paste");
              prevGesture.current = "palm";
            }
          }
        }

        requestAnimationFrame(predictLoop);
      };

      predictLoop();
    };

    setupCamera();
  }, [onGesture]);

  return (
    <video
      ref={videoRef}
      style={{ display: "none" }} // Hidden as requested
      playsInline
      muted
    />
  );
};

export default HandTracker;
