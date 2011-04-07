 $.fn.progress = function (options)  
{  
  var defaults = { Width: 100, InProgress: 0, Completed: 0 };  
  var opt = $.extend(defaults, options);  
  
  function addScale(container, scaleValue, totalWidth, cssClass)  
  {  
    // Ignore scale when value is zero.  
    if (scaleValue == 0)  
      return;  
  
    // Calculate scale length.  
    var scaleLen = totalWidth * scaleValue / 100;  
  
    // Create scale.  
    var scale = $('<div/>');  
    scale.addClass(cssClass);  
    scale.css("width", scaleLen + "px");  
  
    // Set scale text when possible.  
    if (scaleLen > 15)  
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
    container.css("width", opt.Width + "px");  
  
  
    addScale(container, opt.Completed, opt.Width, "complete");  
    addScale(container, opt.InProgress, opt.Width, "inprogress");  
  
    // Create corners.  
    container.corner("3px");  
  });  
};  