class BaseWidget{
  constructor(wrappperElement, initialValue){
    const thisWidget = this;
    thisWidget.dom = {};
    thisWidget.dom.wrappper = wrappperElement;
    thisWidget.value = initialValue;
  }
}

export default BaseWidget;