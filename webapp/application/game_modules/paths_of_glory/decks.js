/**
 * Controls how to display the decks
 *
 * cards_per_pixel_x ... Higher number will make the deck stack tight while a lower number will make the deck be spread out
 * cards_per_pixel_y ... Same but, vertical spread
 *
 */
var cards_per_pixel_x = 0.4;
var cards_per_pixel_y = 4;

var card_abs_pos_top_start  = 300;
var card_abs_pos_left_start = 20;

var card_width = 200;
var card_height = 250;

var decks = [
    {
        'name': 'Allied Mobilization',
        'back': 'apback.jpg',
        'fronts': [
            'ap1.jpg',
            'ap2.jpg',
            'ap3.jpg',
            'ap4.jpg',
            'ap5.jpg',
            'ap6.jpg',
            'ap7.jpg',
            'ap8.jpg',
            'ap9.jpg',
            'ap10.jpg',
            'ap11.jpg',
            'ap12.jpg',
            'ap13.jpg',
            'ap14.jpg'
        ]
    },
    {
        'name': 'Allied Limited War',
        'back': 'apback.jpg',
        'fronts': [
            'ap15.jpg',
            'ap16.jpg',
            'ap17.jpg',
            'ap18.jpg',
            'ap19.jpg',
            'ap20.jpg',
            'ap21.jpg',
            'ap22.jpg',
            'ap23.jpg',
            'ap24.jpg',
            'ap25.jpg',
            'ap26.jpg',
            'ap27.jpg',
            'ap28.jpg',
            'ap29.jpg',
            'ap30.jpg',
            'ap31.jpg',
            'ap32.jpg',
            'ap33.jpg',
            'ap34.jpg'
        ]
    },
    {
        'name': 'Allied Total War',
        'back': 'apback.jpg',
        'fronts': [
            'ap35.jpg',
            'ap36.jpg',
            'ap37.jpg',
            'ap38.jpg',
            'ap39.jpg',
            'ap40.jpg',
            'ap41.jpg',
            'ap42.jpg',
            'ap43.jpg',
            'ap44.jpg',
            'ap45.jpg',
            'ap46.jpg',
            'ap47.jpg',
            'ap48.jpg',
            'ap49.jpg',
            'ap50.jpg',
            'ap51.jpg',
            'ap52.jpg',
            'ap53.jpg',
            'ap54.jpg',
            'ap55.jpg',
            'ap56.jpg',
            'ap57.jpg',
            'ap58.jpg',
            'ap59.jpg',
            'ap60.jpg',
            'ap61.jpg',
            'ap62.jpg',
            'ap63.jpg',
            'ap64.jpg',
            'ap65.jpg'
        ]
    },
    {
        'name': 'Central Powers Mobilization',
        'back': 'cpcback.jpg',
        'fronts': [
            'cp1.jpg',
            'cp2.jpg',
            'cp3.jpg',
            'cp4.jpg',
            'cp5.jpg',
            'cp6.jpg',
            'cp7.jpg',
            'cp8.jpg',
            'cp9.jpg',
            'cp10.jpg',
            'cp11.jpg',
            'cp12.jpg',
            'cp13.jpg',
            'cp14.jpg'
        ]
    },
    {
        'name': 'Central Powers Limited War',
        'back': 'cpcback.jpg',
        'fronts': [
            'cp15.jpg',
            'cp16.jpg',
            'cp17.jpg',
            'cp18.jpg',
            'cp19.jpg',
            'cp20.jpg',
            'cp21.jpg',
            'cp22.jpg',
            'cp23.jpg',
            'cp24.jpg',
            'cp25.jpg',
            'cp26.jpg',
            'cp27.jpg',
            'cp28.jpg',
            'cp29.jpg',
            'cp30.jpg',
            'cp31.jpg',
            'cp32.jpg',
            'cp33.jpg',
            'cp34.jpg'
        ]
    },
    {
        'name': 'Central Powers Total War',
        'back': 'cpcback.jpg',
        'fronts': [
            'cp35.jpg',
            'cp36.jpg',
            'cp37.jpg',
            'cp38.jpg',
            'cp39.jpg',
            'cp40.jpg',
            'cp41.jpg',
            'cp42.jpg',
            'cp43.jpg',
            'cp44.jpg',
            'cp45.jpg',
            'cp46.jpg',
            'cp47.jpg',
            'cp48.jpg',
            'cp49.jpg',
            'cp50.jpg',
            'cp51.jpg',
            'cp52.jpg',
            'cp53.jpg',
            'cp54.jpg',
            'cp55.jpg',
            'cp56.jpg',
            'cp57.jpg',
            'cp58.jpg',
            'cp59.jpg',
            'cp60.jpg',
            'cp61.jpg',
            'cp62.jpg',
            'cp63.jpg',
            'cp64.jpg',
            'cp65.jpg'
        ]
    }
];