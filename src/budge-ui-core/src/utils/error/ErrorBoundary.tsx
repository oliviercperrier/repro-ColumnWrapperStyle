/* eslint-disable react/state-in-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, ReactNode } from "react";
import { ErrorPage } from "../../pages";

export type TErrorBoundaryProps = {
  children: ReactNode;
  fallback?: (reset: () => void) => ReactNode;
  onError?: (error: Error | undefined) => void;
  onReset?: () => void;
};

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<TErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, error: _ };
  }

  resetState = () => this.setState({ hasError: false });

  handleResetState = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }

    this.resetState();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.onError) {
        this.props.onError(this.state.error);
      }

      if (this.props.fallback) {
        return this.props.fallback(this.handleResetState);
      }

      return <ErrorPage onDismiss={this.handleResetState} errorCode={500} showBigCode={false} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
