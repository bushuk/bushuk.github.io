jQuery(document).ready(function(){
    jQuery("form").submit(function(event) { // Событие отправки с формы
        var form_data = jQuery(this).serialize(); // Собираем данные из полей
        var form = this; // Сохраняем ссылку на форму для использования в колбэке

        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "sendform.php", // Путь к PHP обработчику sendform.php
            data: form_data,
            success: function() {
                // Очистка полей ввода
                jQuery(form).find('input, textarea').val('');
                // Убираем модальное окно
                swal({
                    title: "Дякую за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });

        event.preventDefault();
    });
});