/**
 * Error Logger Utility
 * 
 * Centralized error logging for production monitoring.
 * Placeholder for integration with services like Sentry, LogRocket, etc.
 * 
 * @example
 * import { logError } from '@/utils/errorLogger';
 * 
 * try {
 *   // risky operation
 * } catch (error) {
 *   logError(error, { context: 'UserProfile' });
 * }
 */

interface ErrorContext {
  /** Component or feature where error occurred */
  context?: string;
  /** User ID (if available) */
  userId?: string;
  /** Additional metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Log an error to the monitoring service
 */
export const logError = (
  error: Error | unknown,
  context?: ErrorContext
): void => {
  // In development, log to console
  if (process.env.NODE_ENV === "development") {
    console.error("[Error Logger]", {
      error,
      context,
      timestamp: new Date().toISOString(),
    });
    return;
  }

  // In production, send to error tracking service
  // Example integrations:
  
  // Sentry
  // if (typeof Sentry !== 'undefined') {
  //   Sentry.captureException(error, {
  //     tags: { context: context?.context },
  //     user: { id: context?.userId },
  //     extra: context?.metadata,
  //   });
  // }

  // LogRocket
  // if (typeof LogRocket !== 'undefined') {
  //   LogRocket.captureException(error as Error, {
  //     tags: { context: context?.context },
  //     extra: context?.metadata,
  //   });
  // }

  // Custom API endpoint
  // fetch('/api/log-error', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     error: error instanceof Error ? error.message : String(error),
  //     stack: error instanceof Error ? error.stack : undefined,
  //     context,
  //     timestamp: new Date().toISOString(),
  //   }),
  // }).catch(console.error);

  // Fallback: at minimum, log to console
  console.error("[Production Error]", error, context);
};

/**
 * Log a warning (non-critical issue)
 */
export const logWarning = (
  message: string,
  context?: ErrorContext
): void => {
  if (process.env.NODE_ENV === "development") {
    console.warn("[Warning]", message, context);
  }
  // Add production warning tracking if needed
};

/**
 * Log an info message
 */
export const logInfo = (
  message: string,
  metadata?: Record<string, unknown>
): void => {
  if (process.env.NODE_ENV === "development") {
    console.info("[Info]", message, metadata);
  }
  // Add production info tracking if needed
};
