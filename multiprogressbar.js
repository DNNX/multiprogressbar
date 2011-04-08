 $.fn.progress = function (options)  
{  
  var defaults = { InProgress: 0, Completed: 0 };  
  var opt = $.extend(defaults, options);  
  
  function addScale(container, scaleValue, cssClass)  
  {  
    // Ignore scale when value is zero.  
    if (scaleValue == 0)  
      return;  
  
    // Create scale.  
    var scale = $('<div/>');  
    scale.addClass(cssClass);  
    scale.css("width", scaleValue + "%");  
  
    // Set scale text when possible.  
    // TODO: scale.width() returns width in percents, not in pixels. This may be wrong.
    if (scale.width() > 15)  
      scale.html(scaleValue + "%");  
    else  
      scale.html("&nbsp;");  
  
    // Append scale to container.  
    container.append(scale);  
  }  
  
  return this.each(function ()  
  {  
    var container = $(this);  
  
    // Remove any data from container.  
    container.empty();  
  
    // Truncate to 100%  
    if (opt.Completed > 100) opt.Completed = 100;  
    if (opt.InProgress > 100) opt.InProgress = 100;  
    if (opt.Completed + opt.InProgress > 100)  
      opt.InProgress = 100 - opt.Completed;  
  
    // Make container like progress bar.  
    container.addClass("progress");  
  
    addScale(container, opt.Completed, "complete");  
    addScale(container, opt.InProgress, "inprogress");
    
    // Create corners.  
    // TODO: 3px should be in CSS
    container.corner("3px");  
  });  
};  