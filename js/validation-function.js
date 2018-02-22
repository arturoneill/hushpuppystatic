$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            Name: {
             message: 'Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^(?!\s)[A-z ]+$/,
                        message: 'Name can only accept alphabetical input'
                    }
                }
            },
            phoneNumber: {
                message: 'Phone number is not valid',
                validators: {
                    notEmpty: {
                        message: 'Phone number is required and cannot be empty'
                    },
                    stringLength: {
                        min: 10,
                        max: 11,
                        message: 'Phone number must include area code'
                    },
                    regexp: {
                        regexp: '^[0-9]+$',
                        message: 'Phone number may only consist of numbers'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            
            readyTime: {
                message: 'Selection required',
                validators: {
                    notEmpty: {
                        message: 'Selection required'
                    }
                }
            }, 
            
            pickupName: {
             message: 'Pick-up Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Pick-up is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Pick-up name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^(?!\s)[A-z ]+$/,
                        message: 'Pick-up name can only accept alphabetical input'
                    }
                }
            },
            
            pickupAddress: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            }, 
  /*dropoffName: {
             message: 'Drop-off Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Drop-off is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Drop-off name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^(?!\s)[A-z ]+$/,
                        message: 'Drop-off name can only accept alphabetical input'
                    }
                }
            },
            */
            
            dropoffAddress: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            }, 
            
            serviceLevel: {
                message: 'Selection required',
                validators: {
                    notEmpty: {
                        message: 'Selection required'
                    }
                }
            }, 
            
             orderContents: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Order content is required and cannot be empty'
                    }
                }
            }, 
            
             payMethod: {
                message: 'Selection required',
                validators: {
                    notEmpty: {
                        message: 'Selection required'
                    }
                }
            },
        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        
       

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbyft356uP98eL_t_T2OyQM3zKOkeKalirAimcO7hM5o3k7r91g/exec';
        
       
        
        
        var redirectUrl = 'success-page.html';
        
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
                
            });
        
    });
});
