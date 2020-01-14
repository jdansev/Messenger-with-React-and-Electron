

var my_id;
var my_token;

var hubManager: HubManager;

var tabManager: TabManager;
var menuManager: MenuManager;
var messageManager: MessageManager;
var messageHandler: MessageHandler;
var messageUIManager: MessageUIManager;
var fluidMotion: FluidMotion;
var colorFade: ColorFade;

var goManager: GoManager;

var notificationAlertBadge: AlertBadge;
var hubAlertBadge: AlertBadge;
var peopleAlertBadge: AlertBadge;

var emojiPicker: EmojiPicker;


function electronConfig() {
    // set electron zoom
    const {webFrame} = require('electron');
    webFrame.setZoomFactor(1);
}

window.onload = function() {

    electronConfig();

    var spectrum = {
        'Endless River': ['#43cea2', '#185a9d'],
        'Redish Yellow': ['#f1c40f', '#e74c3c'],
        'Vivid': ['#fcb045', '#ee0979'],
        'Ibiza Sunset': ['#ff6a00','#ee0979'],
        'Ocean': ['#36D1DC','#5B86E5'],
        'Purplish Red': ['#8e44ad','#c0392b'],
        'Redgray': ['#f3f3f3','#5B86E5'],
        'Quepal': ['#38ef7d', '#11998e'],
    }
    
    messageManager = new MessageManager();
    messageHandler = new MessageHandler();
    messageUIManager = new MessageUIManager();
    menuManager = new MenuManager();

    hubManager = new HubManager();

    tabManager = new TabManager();
    tabManager.createTabs();
    
    colorFade = new ColorFade(
        // spectrum['Endless River'],
        // spectrum['Redish Yellow'],
        spectrum['Vivid'],
        // spectrum['Ibiza Sunset'],
        // spectrum['Ocean'],
        // spectrum['Purplish Red'],
        // spectrum['Redgray'],
        // spectrum['Quepal'],
    );

    fluidMotion = new FluidMotion(Direction.Reversed);

    goManager = new GoManager();
    goManager.start();
    goManager.register('Derek Smith','derek');

    hubAlertBadge = new AlertBadge($( '#hub-alert-badge' ));
    peopleAlertBadge = new AlertBadge($( '#people-alert-badge' ))
    notificationAlertBadge = new AlertBadge($( '#notification-alert-badge' ));

    emojiPicker = new EmojiPicker($( '.emoji-picker' ), $( '#message-input' ));
    emojiPicker.createEmojiPicker();


    /*Dropdown Menu*/
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(200);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(200);
    });

    for (var color in spectrum) {
        var l = $('<li/>');
        l.append(color);
        $('.dropdown .dropdown-menu').append(l);
        l.data('Spectrum', spectrum[color]);
        l.click(function() {
            $(this).parents('.dropdown').find('span').text($(this).text());
            $(this).parents('.dropdown').find('span').data('Spectrum', $(this).data('Spectrum'));
            $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
            console.log($(this).data('Spectrum'));
        });
    }
    /*End Dropdown Menu*/

}





