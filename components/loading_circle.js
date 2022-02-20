const LoadingCircle = () => {
    return (
      <div className="w-full flex justify-center items-center absolute h-full ">
        <div class="loader absolute z-50"></div>
        <div className="w-full h-full bg-white opacity-90 absolute top-0 left-0"></div>
      </div>
    );
};
export default LoadingCircle