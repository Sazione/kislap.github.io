const ScrollUtils = {
  toTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  
  toTopInstant: () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
};