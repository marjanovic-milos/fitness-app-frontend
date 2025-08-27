"use client";

import { ErrorBoundary } from "react-error-boundary";
import { handleError } from "@/utils/handleError";

function ErrorFallback({ error, resetErrorBoundary }) {
  handleError(error, "ReactBoundary");

  return (
    <div role='alert' className='p-4 border rounded bg-red-100 text-red-700'>
      <h2>Something went wrong 😬</h2>
      <pre className='text-sm'>{error.message}</pre>
      <button onClick={resetErrorBoundary} className='mt-2 px-3 py-1 bg-red-600 text-white rounded'>
        Try again
      </button>
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
