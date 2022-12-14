const CONSTANTS = {
  DICIEMBRE_2021: {
    MENSUAL_RETIRO: [0, 38541, 35806.5, 34935, 31416.5],
    MENSUAL_CAMA_ADENTRO: [0, 42930.5, 39859, 34935, 38931.5, 34935],
    POR_HORA_RETIRO: [0, 309, 292, 275.5, 256],
    POR_HORA_CAMA_ADENTRO: [0, 338, 320.5, 275.5, 308, 275.5],
  },
  MARZO_2022: {
    MENSUAL_RETIRO: [0, 41892, 38920.5, 37973, 34148.5],
    MENSUAL_CAMA_ADENTRO: [0, 46663.5, 43325, 37973, 42317, 37973],
    POR_HORA_RETIRO: [0, 335.5, 317.5, 299.5, 278],
    POR_HORA_CAMA_ADENTRO: [0, 367.5, 348, 299.5, 334, 299.5],
  },
  ABRIL_2022: {
    MENSUAL_RETIRO: [0,  43568, 40477, 39492, 35514.5],
    MENSUAL_CAMA_ADENTRO: [0, 48530, 45058, 39492, 44009.5, 39492],
    POR_HORA_RETIRO: [0, 349, 330.5, 311.5, 289],
    POR_HORA_CAMA_ADENTRO: [0, 382, 362, 311.5, 349, 311.5],
  },
  MAYO_2022: {
    MENSUAL_RETIRO: [0,  47489, 44120, 43046, 38711],
    MENSUAL_CAMA_ADENTRO: [0, 52897.5, 49113, 43046, 47970.5, 43046],
    POR_HORA_RETIRO: [0, 380.5, 360, 339.5, 315],
    POR_HORA_CAMA_ADENTRO: [0, 416.5, 395, 339.5, 380.5, 339.5],
  },
  JUNIO_JULIO_2022: {
    MENSUAL_RETIRO: [0,  54612.5, 50738, 49503, 44517.5],
    MENSUAL_CAMA_ADENTRO: [0, 60832, 56480, 49503, 55166, 49503],
    POR_HORA_RETIRO: [0, 437.5, 414, 390.5, 362.5],
    POR_HORA_CAMA_ADENTRO: [0, 479, 454, 390.5, 437.5, 390.5],
  },
  AGOSTO_2022: {
    MENSUAL_RETIRO: [0, 59528, 55304.5, 53958.5, 48524.5],
    MENSUAL_CAMA_ADENTRO: [0, 66307, 61563.5, 53958.5, 60131, 53958.5],
    POR_HORA_RETIRO: [0, 477, 451.5, 426, 395.5],
    POR_HORA_CAMA_ADENTRO: [0, 522.5, 495, 426, 477, 426],
  },
SEPTIEMBRE_2022: {
    MENSUAL_RETIRO: [0, 64443, 59871, 58414, 52531],
    MENSUAL_CAMA_ADENTRO: [0, 71782, 66646.5, 58414, 65096, 58414],
    POR_HORA_RETIRO: [0, 516.5, 489, 461, 428],
    POR_HORA_CAMA_ADENTRO: [0, 565.5, 536, 461, 516.5, 461],
  },
OCTUBRE_2022: {
    MENSUAL_RETIRO: [0, 69358, 64437.5, 62869, 56537.5],
    MENSUAL_CAMA_ADENTRO: [0, 77257, 71730, 62869, 70061, 62869],
    POR_HORA_RETIRO: [0, 556, 526, 496, 460.5],
    POR_HORA_CAMA_ADENTRO: [0, 608.5, 577, 496, 556, 496],
  },
NOVIEMBRE_2022: {
    MENSUAL_RETIRO: [0, 74273, 69004, 67324.5, 60544],
    MENSUAL_CAMA_ADENTRO: [0, 82732, 76813, 67324.5, 75026, 67324.5],
    POR_HORA_RETIRO: [0, 595, 563, 531.5, 493],
    POR_HORA_CAMA_ADENTRO: [0, 651.5, 617.5, 531.5, 595, 531.5],
  },
};




$(document).ready(function () {
    // month parsing
    month_idx = "AGOSTO_2022";


        payment_method = document.getElementById("modalidad_de_pago").value;
        month_idx = document.getElementById("select_month").value;
        select_value_idx =  Number(document.getElementById("cama_adentro").value)-1;
       valSelectJob = document.getElementById("job_type").value;
        patagonia_percentage = document.getElementById("patagonia").value;
        console.log(payment_method + "modalidad_de_pago" , month_idx + "select_month" ,select_value_idx + "cama_adentro"  ,valSelectJob + "job_tipe",patagonia_percentage + "patagonia");
      
      jobTime = $("#job_time").val();
        antiguedad = $("#antiguedad").val();
        var divB = document.getElementById("basictextDiv");
        var divA = document.getElementById("antiguedadtextDiv");
        var divP = document.getElementById("patagoniatextDiv");
        var divT = document.getElementById("totaltextDiv");
        var divE = document.getElementById("errorDiv");
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
        if (payment_method === "pago_mensual") {
            if (valSelectJob == "cama_adentro") {
                select_value = CONSTANTS[month_idx].MENSUAL_CAMA_ADENTRO[Number(select_value_idx)];
            } else if (valSelectJob == "retiro_mensual") {
                select_value = CONSTANTS[month_idx].MENSUAL_RETIRO[Number(select_value_idx)];
                console.log(month_idx)
                console.log( CONSTANTS[month_idx])
               console.log(select_value, "retiro_mesnual")
            }
            if (jobTime >= 24) {
                producto = Number(select_value) / 48;
                basic = producto * Number(jobTime);
                patagonia = basic * Number(patagonia_percentage);
                antiguedad = basic * Number(antiguedad) * 0.01;
                total = basic + antiguedad + patagonia;
                basic = basic.toFixed(2);
                patagonia = patagonia.toFixed(2);
                antiguedad = antiguedad.toFixed(2);
                total = total.toFixed(2);
                divB.textContent = "-Pago basico por mes: $ ".concat(basic);
              
              console.log(total, "total primera parte")
              
                if (antiguedad > 0) {
                    divA.textContent = "-Extra antiguedad: $ ".concat(antiguedad);
                    $("#antiguedadtextDiv").show();
                }
                if (patagonia > 0) {
                    divP.textContent = "-Adicional Patagonia: $ ".concat(patagonia);
                    $("#patagoniatextDiv").show();
                }
                if (patagonia > 0 || antiguedad > 0) {
                    $("#basictextDiv").show();
                }
                divT.textContent = total;
                $("#totaltextDiv").show();
                $("#errorDiv").hide();
            } else {
                divE.textContent = "Por menos de 24 horas semanales, corresponde pago por hora.";
                $("#errorDiv").show();
                $("#basictextDiv").hide();
                $("#antiguedadtextDiv").hide();
                $("#patagoniatextDiv").hide();
                $("#totaltextDiv").hide();
            }
        } else if (payment_method === "pago_por_hora") {
            if (valSelectJob == "cama_adentro") {
                select_value = CONSTANTS[month_idx].POR_HORA_CAMA_ADENTRO[select_value_idx];
            } else if (valSelectJob == "retiro_mensual") {
                select_value = CONSTANTS[month_idx].POR_HORA_RETIRO[select_value_idx];
            }
            if (jobTime < 24) {
                basic = select_value * Number(jobTime);
                patagonia = basic * Number(patagonia_percentage);
                antiguedad = basic * Number(antiguedad) * 0.01;
                total = basic + antiguedad + patagonia;
                basic = basic.toFixed(2);
                patagonia = patagonia.toFixed(2);
                antiguedad = antiguedad.toFixed(2);
                total = total.toFixed(2);
                divB.textContent = "-Pago basico por semana: $ ".concat(basic);
                if (antiguedad > 0) {
                    divA.textContent = "-Antiguedad: $ ".concat(antiguedad);
                    $("#antiguedadtextDiv").show();
                }
                if (patagonia > 0) {
                    divP.textContent = "-Adicional Patagonia: $ ".concat(patagonia);
                    $("#patagoniatextDiv").show();
                }
                if (patagonia > 0 || antiguedad > 0) {
                    $("#basictextDiv").show();
                }
                divT.textContent = "Pago total por semana: $ ".concat(total);
                $("#totaltextDiv").show();
                $("#errorDiv").hide();
            } else {
                divE.textContent = "Desde 24 horas semanales, corresponde pago mensual.";
                $("#errorDiv").show();
                $("#basictextDiv").hide();
                $("#antiguedadtextDiv").hide();
                $("#patagoniatextDiv").hide();
                $("#totaltextDiv").hide();
            }
        }
      
    

    $("#select_month").on("change", function () {
        month_idx = document.getElementById("select_month").value;
    });


    $("#job_type").on("change", function () {
        valSelectJob = $(this).val();
        select_value = 0;
    });
    $("select").on("change", function () {
        $("#job_time").val(0);
        $("#antiguedad").val(0);
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
        $("#errorDiv").hide();
    });
    $("#cama_adentro").on("change", function () {
        select_value_idx = document.getElementById("cama_adentro").value;
    });
    $("#modalidad_de_pago").on("change", function () {
        payment_method = document.getElementById("modalidad_de_pago").value;
    });
    $("#patagonia").on("change", function () {
        patagonia_percentage = document.getElementById("patagonia").value;
    });
    $("#button_calculate").on("click", function () {
        jobTime = $("#job_time").val();
        antiguedad = $("#antiguedad").val();
        var divB = document.getElementById("basictextDiv");
        var divA = document.getElementById("antiguedadtextDiv");
        var divP = document.getElementById("patagoniatextDiv");
        var divT = document.getElementById("totaltextDiv");
        var divE = document.getElementById("errorDiv");
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
        if (payment_method === "pago_mensual") {
            if (valSelectJob == "cama_adentro") {
                select_value = CONSTANTS[month_idx].MENSUAL_CAMA_ADENTRO[Number(select_value_idx)];
            } else if (valSelectJob == "retiro_mensual") {
                select_value = CONSTANTS[month_idx].MENSUAL_RETIRO[Number(select_value_idx)];
                console.log(month_idx)
                console.log( CONSTANTS[month_idx])
               console.log(select_value, "retiro_mesnual")
            }
            if (jobTime >= 24) {
                producto = Number(select_value) / 48;
                basic = producto * Number(jobTime);
                patagonia = basic * Number(patagonia_percentage);
                antiguedad = basic * Number(antiguedad) * 0.01;
                total = basic + antiguedad + patagonia;
                basic = basic.toFixed(2);
                patagonia = patagonia.toFixed(2);
                antiguedad = antiguedad.toFixed(2);
                total = total.toFixed(2);
                divB.textContent = "-Pago basico por mes: $ ".concat(basic);
              
              console.log(total, "total primera parte")
              
                if (antiguedad > 0) {
                    divA.textContent = "-Extra antiguedad: $ ".concat(antiguedad);
                    $("#antiguedadtextDiv").show();
                }
                if (patagonia > 0) {
                    divP.textContent = "-Adicional Patagonia: $ ".concat(patagonia);
                    $("#patagoniatextDiv").show();
                }
                if (patagonia > 0 || antiguedad > 0) {
                    $("#basictextDiv").show();
                }
                divT.textContent = total;
                $("#totaltextDiv").show();
                $("#errorDiv").hide();
            } else {
                divE.textContent = "Por menos de 24 horas semanales, corresponde pago por hora.";
                $("#errorDiv").show();
                $("#basictextDiv").hide();
                $("#antiguedadtextDiv").hide();
                $("#patagoniatextDiv").hide();
                $("#totaltextDiv").hide();
            }
        } else if (payment_method === "pago_por_hora") {
            if (valSelectJob == "cama_adentro") {
                select_value = CONSTANTS[month_idx].POR_HORA_CAMA_ADENTRO[select_value_idx];
            } else if (valSelectJob == "retiro_mensual") {
                select_value = CONSTANTS[month_idx].POR_HORA_RETIRO[select_value_idx];
            }
            if (jobTime < 24) {
                basic = select_value * Number(jobTime);
                patagonia = basic * Number(patagonia_percentage);
                antiguedad = basic * Number(antiguedad) * 0.01;
                total = basic + antiguedad + patagonia;
                basic = basic.toFixed(2);
                patagonia = patagonia.toFixed(2);
                antiguedad = antiguedad.toFixed(2);
                total = total.toFixed(2);
                divB.textContent = "-Pago basico por semana: $ ".concat(basic);
                if (antiguedad > 0) {
                    divA.textContent = "-Antiguedad: $ ".concat(antiguedad);
                    $("#antiguedadtextDiv").show();
                }
                if (patagonia > 0) {
                    divP.textContent = "-Adicional Patagonia: $ ".concat(patagonia);
                    $("#patagoniatextDiv").show();
                }
                if (patagonia > 0 || antiguedad > 0) {
                    $("#basictextDiv").show();
                }
                divT.textContent = "Pago total por semana: $ ".concat(total);
                $("#totaltextDiv").show();
                $("#errorDiv").hide();
            } else {
                divE.textContent = "Desde 24 horas semanales, corresponde pago mensual.";
                $("#errorDiv").show();
                $("#basictextDiv").hide();
                $("#antiguedadtextDiv").hide();
                $("#patagoniatextDiv").hide();
                $("#totaltextDiv").hide();
            }
        }
    })
})
