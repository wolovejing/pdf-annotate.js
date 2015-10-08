import StoreAdapter from './StoreAdapter';
import renderView from './render/renderView';

// Public API
let PDFJSAnnotate = {
  StoreAdapter,

  getAnnotations(documentId, pageNumber) {
    return this.StoreAdapter.getAnnotations(documentId, pageNumber);
  },

  addAnnotation(documentId, pageNumber, annotation) {
    return this.StoreAdapter.addAnnotation(documentId, pageNumber, annotation);
  },

  render(svg, viewport, annotations) {
    return renderView(svg, viewport, annotations);
  }
};

export default PDFJSAnnotate;
