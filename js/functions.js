
$.ajax({
    type:"GET", 
    url: "https://server.elnexorp.com", 
    success: function(data) {
        $('#server-status').addClass('up').removeClass('down');
    }, 
    error: function(jqXHR, textStatus, errorThrown) {
        $('#server-status').addClass('down').removeClass('up');
    },
dataType: "jsonp"
});