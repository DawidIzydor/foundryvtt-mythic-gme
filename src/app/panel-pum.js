import MGMEPanel from "./panel-base";

export default class PUMPanel extends MGMEPanel {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "pum_panel_window",
      template: "./modules/mythic-gme-tools/template/panel-pum.hbs"
    });
  }

  activateListeners(html) {
    const api = game.modules.get('mythic-gme-tools').api;

    html.find("#pum_sd").click(api.pumSceneDesigner);
    html.find("#pum_ex").click(api.pumExpectationChecker);
    html.find("#pum_cd").click(api.pumChallengeDesigner);
    html.find("#pum_hs").click(api.pumHighStakes);

    html.find("#pum_comp").click(api.pumComplicationDesigner);
    html.find("#pum_comb").click(api.pumCombatDesigner);

    html.find("#pum_qqe").click(api.pumYesOrNoEven);
    html.find("#pum_qql").click(api.pumYesOrNoLikely);
    html.find("#pum_qqu").click(api.pumYesOrNoUnlikely);

    html.find("#pum_hma").click(api.pumHowMany);
    html.find("#pum_hmu").click(api.pumHowMuch);
    html.find("#pum_hg").click(api.pumHowGood);
    html.find("#pum_hh").click(api.pumHowHard);

    html.find("#pum_area").click(api.pumLooksArea);
    html.find("#pum_npc").click(api.pumLooksNPC);
    html.find("#pum_obj").click(api.pumLooksObject);

    html.find("#pum_wh").click(api.pumWhat);
    html.find("#pum_in").click(api.pumIntent);

  }

}