function Signature({ size = 300 }: { size?: number }) {
  const id = crypto.randomUUID();

  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 850 480"
      className="animated-svg"
      width={size}
    >
      <path
        d="M80.11,226.99c23.2-16.18,54.12-63.24,66.29-87.75,13.01-26.2,28.65-67.84,23.87-78.72-8.12-18.48-26.22,43.97-37.52,86.47-10.68,40.15-54.52,189.47-81.51,251.25-1.43,3.27-29.21,62.14-34.25,61.44-9.57-1.32,17.66-103.29,38.69-150.19,56.68-126.42,130.54-150.02,131.11-148.48.51,1.37-14.38,6.25-27.53,17.36-16.65,14.07-23.47,37.29-16.02,37.65,23.83,1.15,39.85-49.29,41.01-49.23.84.04-15.31,36.52-2.51,42.67,9.23,4.44,31.73-45.37,34.06-44.25,2.12,1.01-17.18,40.29-13.05,42.26,9.52,4.53,25.51-45.14,35.12-46.15,14.18-1.5-6.88,39.48-1.91,41.59,6.49,2.75,29.55-57.55,40.94-54.96,7.07,1.61-19.37,42.04,3.27,54.97,15.85,9.06,53.73-61.94,44.84-64.55-7.02-2.06-21.74,12.37-28.67,32.32-1.12,3.23-8.5,23.18.6,30.69,16.95,14,39.87.87,46.53-6.72,33.88-38.63,43.94-65.45,50.88-86.38,8-24.13,26.33-79.99,16.72-87.49-2.95-2.3-7.89,1.66-26.01,60.77-17.76,57.94-16.25,118.49-62.9,251.45-12.19,34.75-39.37,102.66-46.95,106.98-8.72,4.96,6.77-98.71,30.32-147.01,72.21-148.14,120.93-157.71,122.21-155.47.99,1.75-13.75,1.51-25.95,17.92-10.78,14.5-13.65,30.45-5.98,33.24,19.27,7,31.82-44.07,31.5-44.25-.32-.18-4.21,43.64,15.38,51.65,13.03,5.33,36.94-10.15,43.79-25.13,7.48-16.37,2.66-24.2-2.25-23.34-12.59,2.21-40.68,45.76-26.32,56.44,8.85,6.58,47.22-64.2,52.82-61.44,4.2,2.07-13.82,35.02-32.95,84.56-36.23,93.8-49.25,170.35-75.69,196.2-6.4,6.26,4.07-63.85,17.56-96.86,25.27-61.83,125.28-194.72,128.91-191.97,1.08.82-14.57,19.41-18.77,50.76-.85,6.31-3.21,23.93,1.79,25.87,11.23,4.37,50.06-74.37,54.75-72.06,3.77,1.86-30.12,48.81-15.58,55.77,14.51,6.95,45.38-57.66,43.44-58.44-2.76-1.12-23.21,53.49-5.23,56.05,12.92,1.83,35-41.01,36.19-40.58,1.22.44-15.76,38.35-15.31,38.51.55.2,27.97-59,35.36-57.34,2.7.61-10.02,41.36,26.91,57.88,15.14,6.77,34.87.4,45.79-12.11,11.83-13.55,15.82-38.35,7.15-41.05-15.36-4.78-36.18,21.88-35.52,44.19.39,13.16,9.1,20.06,21.41,22.35,50.1,9.32,93.29,8.96,102.83-3.28,21.05-27-238.55-93.42-231.44-126.94,3.69-17.42,74.09-20.95,75.17-16.17.66,2.93-24.15,11.13-49.49,18.76"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
      />
    </svg>
  );
}

export default Signature;
