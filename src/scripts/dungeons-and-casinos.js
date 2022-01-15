class DungeonAndCasinos {

    static async Init(controls, html) {

        const dncBtn = $(
            `
            <li class="scene-control sdr-scene-control" data-control="dungeons-and-casinos" title="Dungeons&Casinos">
                <i class="fas fa-dice-d20"></i>
            </li>
            `
        );

        html.find(".main-controls").append(dncBtn);
    }
}