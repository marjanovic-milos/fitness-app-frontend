"use client";
import { ErrorBoundary } from "react-error-boundary";
import { handleError } from "src/utils/handleError";
function ErrorFallback({ error, resetErrorBoundary }) {
  handleError(error, "ReactBoundary");

  return (
    <div role='alert' className='flex justify-center items-center p-4 border rounded h-screen bg-red-100 text-red-700'>
      <div className='flex flex-col gap-5'>
        <h2>Something went wrong</h2>
        <p className=''>{error.message}</p>
        <button onClick={resetErrorBoundary} className='w-md mt-2 m-auto px-3 py-1 bg-red-600 text-white rounded'>
          Try again
        </button>
      </div>
    </div>
  );
}

export function AppErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error, info) => handleError(error, "ErrorBoundary")}>
      {children}
    </ErrorBoundary>
  );
}
