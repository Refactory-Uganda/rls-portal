const Loading = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:bg-white">
        <span className="sr-only">Loading...</span>
        <div style={{borderRadius: '50%'}} className="h-8 w-8 bg-bluegreen rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div style={{borderRadius: '50%'}} className="h-8 w-8 bg-bluegreen rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div style={{borderRadius: '50%'}} className="h-8 w-8 bg-bluegreen rounded-full animate-bounce"></div>
      </div>
    </>
  );
};

export default Loading;
