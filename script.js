let linkObj = {};
linkObj.which_network = "both";
if (linkObj.which_network == "both") {
}

//facebook
let fbFreq = [
  "1-2 days (rarely)",
  "3-4 days (sometimes)",
  "5-6 days (often)",
  "7days (always)",
];

//Instagram
let igFreq = ["1 (1-2 days)", "2 (3-4 days)", "3 (5-6 days)", "4 (7days)"];

let min, max;
let ans = {
  use_freq_ig: igFreq[randNum(0, 3)],
  use_freq_fb: fbFreq[randNum(0, 3)],
  share_ent_link: randNum(1, 5),
  play_games: randNum(1, 5),
  make_friends: randNum(1, 5),
  share_pictures: randNum(1, 5),
  to_escape_worries: randNum(1, 5),
  to_escape_pressures: randNum(1, 5),
  to_meet_people: randNum(1, 5),
  to_network_prof: randNum(1, 5),
  post_resume: randNum(1, 5),
  present_info_special_interest: randNum(1, 5),
  scholarship_info: randNum(1, 5),
  world_political_dev: randNum(1, 5),
  share_academic_news: randNum(1, 5),
  most_people_use: randNum(1, 5),
  people_think_high: randNum(1, 5),
};

if (ans.share_ent_link > 2) {
  min = 3;
  max = 5;
  ans.share_hobbies = randNum(min, max);
  ans.update_gossip = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.share_hobbies = randNum(min, max);
  ans.update_gossip = randNum(min, max);
}

if (ans.make_friends > 2) {
  min = 3;
  max = 5;
  ans.connect_with_fam = randNum(min, max);
  ans.maintain_old_friends = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.connect_with_fam = randNum(min, max);
  ans.maintain_old_friends = randNum(min, max);
}

if (ans.to_escape_worries > 2) {
  min = 3;
  max = 5;
  ans.forget_problems = randNum(min, max);
  ans.occupy_time = randNum(min, max);
  ans.feel_less_lonley = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.forget_problems = randNum(min, max);
  ans.occupy_time = randNum(min, max);
  ans.feel_less_lonley = randNum(min, max);
}

if (ans.to_escape_pressures > 2) {
  min = 3;
  max = 5;
  ans.to_relax = randNum(min, max);
  ans.get_away = randNum(min, max);
  ans.put_off_something = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.to_relax = randNum(min, max);
  ans.get_away = randNum(min, max);
  ans.put_off_something = randNum(min, max);
}

if (ans.to_meet_people > 2) {
  min = 3;
  max = 5;
  ans.friends_with_opp_sex = randNum(min, max);
  ans.express_feelings = randNum(min, max);
  ans.chat_strangers = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.friends_with_opp_sex = randNum(min, max);
  ans.express_feelings = randNum(min, max);
  ans.chat_strangers = randNum(min, max);
}

if (ans.to_network_prof > 2) {
  min = 3;
  max = 5;
  ans.helpful_prof_future = randNum(min, max);
  ans.search_for_companies = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.helpful_prof_future = randNum(min, max);
  ans.search_for_companies = randNum(min, max);
}

if (ans.present_info_special_interest > 2) {
  min = 3;
  max = 5;
  ans.share_info_special_info = randNum(min, max);
  ans.open_to_ideas = randNum(min, max);
  ans.get_peer_support = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.share_info_special_info = randNum(min, max);
  ans.open_to_ideas = randNum(min, max);
  ans.get_peer_support = randNum(min, max);
}

if (ans.scholarship_info > 2) {
  min = 3;
  max = 5;
  ans.fill_admin_form = randNum(min, max);
  ans.access_online_test = randNum(min, max);
  ans.free_online_course = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.fill_admin_form = randNum(min, max);
  ans.access_online_test = randNum(min, max);
  ans.free_online_course = randNum(min, max);
}

if (ans.world_political_dev > 2) {
  min = 3;
  max = 5;
  ans.get_news_update = randNum(min, max);
  ans.get_leaders_update = randNum(min, max);
  ans.know_world_problems = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.get_news_update = randNum(min, max);
  ans.get_leaders_update = randNum(min, max);
  ans.know_world_problems = randNum(min, max);
}

if (ans.share_academic_news > 2) {
  min = 3;
  max = 5;
  ans.share_assignment_link = randNum(min, max);
  ans.share_project_ideas = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.share_assignment_link = randNum(min, max);
  ans.share_project_ideas = randNum(min, max);
}

if (ans.most_people_use > 2) {
  min = 3;
  max = 5;
  ans.more_will_use = randNum(min, max);
  ans.related_services = randNum(min, max);
  ans.related_application = randNum(min, max);
  ans.most_i_know = randNum(min, max);
  ans.comm_many_use = randNum(min, max);
  ans.large_percent_use = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.more_will_use = randNum(min, max);
  ans.related_services = randNum(min, max);
  ans.related_application = randNum(min, max);
  ans.most_i_know = randNum(min, max);
  ans.comm_many_use = randNum(min, max);
  ans.large_percent_use = randNum(min, max);
}

if (ans.people_think_high > 2) {
  min = 3;
  max = 5;
  ans.considered_best = randNum(min, max);
  ans.looked_at_prestigious = randNum(min, max);
} else {
  min = 1;
  max = 2;
  ans.considered_best = randNum(min, max);
  ans.looked_at_prestigious = randNum(min, max);
}

console.log(ans, "this is ans");

function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
