// api call will be made here

$(document).ready(function() {
    let pages = ['js-dashboard'];


    // $('.js-dashboard, .nav-page').on('click', function() {
    //     $('.js-dashboard-page').removeClass('d-none');
    //     $('.js-dashboard').addClass('active');
    //     $('.js-review-visits-page').addClass('d-none');
    //     $('.js-review-visits').removeClass('active');

    // });

    // $('.js-review-visits').on('click', function() {
    //     $('.js-dashboard-page').addClass('d-none');
    //     $('.js-dashboard').removeClass('active');
    //     $('.js-review-visits-page').removeClass('d-none');
    //     $('.js-review-visits').addClass('active');

    //     getReviewVisits();
    // });


    $('.js-new-patient-btn').on('click', function() {
        $('.visitation-page').addClass('d-none');
        $('.new-patient-page').removeClass('d-none');
    });

    $('.js-generate-upi').on('click', function(e) {
        e.preventDefault();
        createNewPatient();
    });

    $('.js-get-record-btn').on('click', function(e) {
        e.preventDefault();
        $('.js-upi-form').addClass('d-none');
        $('.js-record-page').removeClass('d-none');
    });


    function setHash(hash) {
        if (history.pushState) {
            history.pushState(null, null, hash);
        } else {
            location.hash = hash;
        }
    }

    var proxyurl = 'https://fathomless-garden-11176.herokuapp.com/';
    let baseUrl = 'https://chioma.herokuapp.com/v1';

    let data = {

    }

    function getNewPatientData() {
        extra = {
            'sex': $('#sex').val(),
            'marital_status': $('#maritalStatus').val(),
            'blood_pressure': '80hp/120'
        };

        return {
            "name": $('#fullname').val(),
            "email": $('#email').val(),
            "phone_number": $('#number').val(),
            "password": "password123",
            "user_type": "patient",
            "extra_details": extra,
            "hospital_id": "17ff72ef-1297-4d5d-99b8-133dd831f1cf"
        };
    }

    // Sends request to add new patient
    function createNewPatient() {
        $.ajax({
            url: `${proxyurl + baseUrl}/auth/register`,
            type: 'POST',
            dataType: 'application/json', // added data type,
            data: getNewPatientData(),

            success: function(res) {
                console.log(res);
                // alert(res);
            },

            error: function(res) {
                console.log(res);
                // alert(res);
            }
        });
    }

    function getVisitData() {
        return {

        }
    }

    function createNewVisit() {
        $.ajax({
            url: `${proxyurl + baseUrl}/visit`,
            type: 'POST',
            dataType: 'json', // added data type,
            data: getVisitData(),

            success: function(res) {
                console.log(res);
                // alert(res);
            },

            error: function(res) {
                console.log(res);
                // alert(res);
            }
        });
    }

    function getReviewVisits() {
        $.ajax({
            url: `${baseUrl}/visit`,
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                console.log(res);
                // alert(res);
            }
        });
    }

    function createNewDiagnosis() {
        $.ajax({
            url: `${proxyurl + baseUrl}/`,
            type: 'POST',
            dataType: 'json', // added data type,
            data: getVisitData(),

            success: function(res) {
                console.log(res);
                // alert(res);
            },

            error: function(res) {
                console.log(res);
                // alert(res);
            }
        });
    }

});