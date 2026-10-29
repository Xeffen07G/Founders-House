import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    // Errors are intercepted here without logging sensitive details to the user console
  }

  handleReload = () => {
    window.location.hash = '#hero';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Clean, user-friendly fallback UI with NO technical details or stack traces exposed
      return (
        <div className="min-h-screen bg-[#120205] text-[#FFF9F2] flex items-center justify-center p-6 selection:bg-[#E11D48]">
          <div className="max-w-md w-full bg-[#1C0509] border-3 border-black rounded-2xl p-8 text-center shadow-[8px_8px_0px_#000]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E11D48] border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000]">
              ⚡
            </div>
            <h2 className="font-bebas text-3xl text-white tracking-wider mb-2">
              SIGNAL INTERRUPTED
            </h2>
            <p className="font-poppins text-sm text-white/75 leading-relaxed mb-6">
              Our line ran into an unexpected snag. Please reload to resume the sprint.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="px-6 py-3 rounded-full bg-[#FFC800] hover:bg-[#FFE600] text-black font-bebas text-lg tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
            >
              RELOAD SPRINT
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

