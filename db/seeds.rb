# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Payment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('payments')

me = User.create!( email: 'noblest_cheetah@noblecheetah.io', password: 'password')
demo = User.create!(email: "demo_user@aa.io", password: 'password')

u1 = User.create!( email: 'jackpack@noblecheetah.io', password: 'password')
u2 = User.create!( email: 'jdeezy@noblecheetah.io', password: 'password')
u3 = User.create!( email: 'jonstummywummy@noblecheetah.io', password: 'password')
u4 = User.create!( email: 'chris2tall@noblecheetah.io', password: 'password')
u5 = User.create!( email: 'peteypal@noblecheetah.io', password: 'password')
u6 = User.create!( email: 'tay@noblecheetah.io', password: 'password')
u7 = User.create!( email: 'LisaREALG@noblecheetah.io', password: 'password')
u8 = User.create!( email: 'aileentran@sendpal.com', password: 'password')
u9 = User.create!( email: 'alfredwaters@sendpal.com',password: 'password')
u10 = User.create!(email: 'andychan@yahoo.com',password: 'password')
u11 = User.create!(email: 'aj@gmail.com',password: 'password')
u12 = User.create!(email: 'aisharodgers@gmail.com',password: 'password')
u13 = User.create!(email: 'aishwaryanair@aa.io',password: 'password')
u14 = User.create!(email: 'brettmonroe@hotmail.com',password: 'password')
u15 = User.create!(email: 'brooksharper@mymail.com',password: 'password')
u16 = User.create!(email: 'brandonlee@gmail.com',password: 'password')
u17 = User.create!(email: 'brainbrown@aa.io',password: 'password')
u18 = User.create!(email: 'barrysanders@yahoo.com',password: 'password')
u19 = User.create!(email: 'carmelo@hotmail.com',password: 'password')
u20 = User.create!(email: 'chrissytiegan@paypal.com',password: 'password')
u21 = User.create!(email: 'carolebaskins@gmail.com',password: 'password')
u22 = User.create!(email: 'camnewton@aa.io',password: 'password')
u23 = User.create!(email: 'chadwickbosman2020@yahoo.com',password: 'password')
u24 = User.create!(email: 'dollyparton@hotmail.com',password: 'password')
u25 = User.create!(email: 'dwaynewade@paypal.com',password: 'password')
u26 = User.create!(email: 'denzel@gmail.com', password: 'password')
u27 = User.create!(email: 'drdre@aa.io', password: 'password')
u28 = User.create!(email: 'dianaross@yahoo.com', password: 'password')
u29 = User.create!(email: 'elonmusk@hotmail.com',password: 'password')
u30 = User.create!(email: 'ellendegeneres@paypal.com',password: 'password')
u31 = User.create!(email: 'eminem@gmail.com', password: 'password')
u32 = User.create!(email: 'edsheeran@aa.io', password: 'password')
u33 = User.create!(email: 'elvis84@yahoo.com', password: 'password')
u34 = User.create!(email: 'freddiemercury@hotmail.com',password: 'password')
u35 = User.create!(email: 'floydmayweather@paypal.com',password: 'password')
u36 = User.create!(email: 'franksinatra@gmail.com', password: 'password')
u37 = User.create!(email: 'fernandomania@aa.io', password: 'password')
u38 = User.create!(email: 'florenceandthemachine@yahoo.com', password: 'password')
u39 = User.create!(email: 'georgemichael75@yahoo.com', password: 'password')
u40 = User.create!(email: 'gigihadid@paypal.com',password: 'password')
u41 = User.create!(email: 'granthill@gmail.com', password: 'password')
u42 = User.create!(email: 'giannisantotokounmpo@aa.io', password: 'password')
u43 = User.create!(email: 'gwynethpaltrow@yahoo.com', password: 'password')
u44 = User.create!(email: 'halsey@hotmail.com',password: 'password')
u45 = User.create!(email: 'hopesolo@paypal.com',password: 'password')
u46 = User.create!(email: 'hulk41@gmail.com', password: 'password')
u47 = User.create!(email: 'hershelwalker@aa.io', password: 'password')
u48 = User.create!(email: 'hilaryduff@yahoo.com', password: 'password')
u49 = User.create!(email: 'heathledger@yahoo.com', password: 'password')
u50 = User.create!(email: 'icecube@paypal.com',password: 'password')
u51 = User.create!(email: 'billyidol@gmail.com', password: 'password')
u52 = User.create!(email: 'idriselba@aa.io', password: 'password')
u53 = User.create!(email: 'isaacnewton@yahoo.com', password: 'password')
u54 = User.create!(email: 'jeffbezos@hotmail.com',password: 'password')
u55 = User.create!(email: 'jimmybutler@paypal.com',password: 'password')
u56 = User.create!(email: 'johnnydepp@gmail.com', password: 'password')
u57 = User.create!(email: 'ironman3@aa.io', password: 'password')
u58 = User.create!(email: 'jenniferaniston@yahoo.com', password: 'password')
u59 = User.create!(email: 'kobe824@yahoo.com', password: 'password')
u60 = User.create!(email: 'kardashian@paypal.com',password: 'password')
u61 = User.create!(email: 'keanureeves@gmail.com', password: 'password')
u62 = User.create!(email: 'krisbryant@aa.io', password: 'password')
u63 = User.create!(email: 'kaceymusgraves@yahoo.com', password: 'password')
u64 = User.create!(email: 'lebronjames@hotmail.com',password: 'password')
u65 = User.create!(email: 'leonardodicaprio@paypal.com',password: 'password')
u66 = User.create!(email: 'ladygaga1753@gmail.com', password: 'password')
u67 = User.create!(email: 'linmanuelmiranda@aa.io', password: 'password')
u68 = User.create!(email: 'lionelmessi@yahoo.com', password: 'password')
u69 = User.create!(email: 'michaeljordan@yahoo.com', password: 'password')
u70 = User.create!(email: 'mileycyrus@paypal.com',password: 'password')
u71 = User.create!(email: 'mariahcarey@gmail.com', password: 'password')
u72 = User.create!(email: 'michaeljackson@aa.io', password: 'password')
u73 = User.create!(email: 'maryjblige@yahoo.com', password: 'password')
u74 = User.create!(email: 'nelsonmandela@hotmail.com',password: 'password')
u75 = User.create!(email: 'nikkiminaj@paypal.com',password: 'password')
u76 = User.create!(email: 'nancypelosi@gmail.com', password: 'password')
u77 = User.create!(email: 'nicolascage@aa.io', password: 'password')
u78 = User.create!(email: 'neilarmstrong@yahoo.com', password: 'password')
u79 = User.create!(email: 'novakdjokovic@yahoo.com', password: 'password')
u80 = User.create!(email: 'oj2580@paypal.com',password: 'password')
u81 = User.create!(email: 'oscarrobertson@gmail.com', password: 'password')
u82 = User.create!(email: 'olivianewtonjohn@aa.io', password: 'password')
u83 = User.create!(email: 'ozzieosbourne@yahoo.com', password: 'password')
u84 = User.create!(email: 'obama99@hotmail.com',password: 'password')
u85 = User.create!(email: 'paulmccartney@paypal.com',password: 'password')
u86 = User.create!(email: 'pdiddy@gmail.com', password: 'password')
u87 = User.create!(email: 'parishilton62@aa.io', password: 'password')
u88 = User.create!(email: 'peytonmanning@yahoo.com', password: 'password')
u89 = User.create!(email: 'prince@yahoo.com', password: 'password')
u90 = User.create!(email: 'queen@paypal.com',password: 'password')
u91 = User.create!(email: 'quentintarantino@gmail.com', password: 'password')
u92 = User.create!(email: 'queenlatifah58@aa.io', password: 'password')
u93 = User.create!(email: 'qtip@yahoo.com', password: 'password')
u94 = User.create!(email: 'quincy@hotmail.com',password: 'password')
u95 = User.create!(email: 'r2d2@paypal.com',password: 'password')
u96 = User.create!(email: 'rihanna@gmail.com', password: 'password')
u97 = User.create!(email: 'robert@aa.io', password: 'password')
u98 = User.create!(email: 'rachelmcadams@yahoo.com', password: 'password')
u99 = User.create!(email: 'ruthbaderginsburg@yahoo.com', password: 'password')
u100 = User.create!(email: 'saquonbarkley@paypal.com',password: 'password')
u101 = User.create!(email: 'selena@gmail.com', password: 'password')
u102 = User.create!(email: 'serenawilliams@aa.io', password: 'password')
u103 = User.create!(email: 'snoopdogg@yahoo.com', password: 'password')
u104 = User.create!(email: 'scarlettjohansson@hotmail.com',password: 'password')
u105 = User.create!(email: 'tombrady12@paypal.com',password: 'password')
u106 = User.create!(email: '2pac@gmail.com', password: 'password')
u107 = User.create!(email: 'taylorswift@aa.io', password: 'password')
u108 = User.create!(email: 'travisscott7@yahoo.com', password: 'password')
u109 = User.create!(email: 'tinaturn22@yahoo.com', password: 'password')
u110 = User.create!(email: 'usher@paypal.com',password: 'password')
u111 = User.create!(email: 'u2music@gmail.com', password: 'password')
u112 = User.create!(email: 'umathurman192@aa.io', password: 'password')
u113 = User.create!(email: 'unclesam@yahoo.com', password: 'password')
u114 = User.create!(email: 'usmankamarou88@hotmail.com',password: 'password')
u115 = User.create!(email: 'valkilmer239@paypal.com',password: 'password')
u116 = User.create!(email: 'victoroladipo37@gmail.com', password: 'password')
u117 = User.create!(email: 'vanmorrison@aa.io', password: 'password')
u118 = User.create!(email: 'venuswilliams@yahoo.com', password: 'password')
u119 = User.create!(email: 'vampireweekend@yahoo.com', password: 'password')
u120 = User.create!(email: 'wallflowers78@paypal.com',password: 'password')
u121 = User.create!(email: 'waynebrady103@gmail.com', password: 'password')
u122 = User.create!(email: 'wakaflockaflame@aa.io', password: 'password')
u123 = User.create!(email: 'winniethepooh90@yahoo.com', password: 'password')
u124 = User.create!(email: 'williamshakespeare@hotmail.com',password: 'password')
u125 = User.create!(email: 'xavierrhodes26@paypal.com',password: 'password')
u126 = User.create!(email: 'xxxtentacion@gmail.com', password: 'password')
u127 = User.create!(email: 'xenawarriorprincess@aa.io', password: 'password')
u128 = User.create!(email: 'xzibit@yahoo.com', password: 'password')
u129 = User.create!(email: 'xenocrates@yahoo.com', password: 'password')
u130 = User.create!(email: 'youngmoney847@paypal.com',password: 'password')
u131 = User.create!(email: 'yaoming@gmail.com', password: 'password')
u132 = User.create!(email: 'yanni620@aa.io', password: 'password')
u133 = User.create!(email: 'yokoono0@yahoo.com', password: 'password')
u134 = User.create!(email: 'yasmanigrandal84@hotmail.com',password: 'password')
u135 = User.create!(email: 'zacbrownband@paypal.com',password: 'password')
u136 = User.create!(email: 'zedd49@gmail.com', password: 'password')
u137 = User.create!(email: 'ziggymarley420@aa.io', password: 'password')
u138 = User.create!(email: 'zoesaldana@yahoo.com', password: 'password')
u139 = User.create!(email: 'zlatanibrahimovic@yahoo.com', password: 'password')

# payment1 = Payment.create!(
#   amount: 50.00, 
#   note: 'wingz & thingz 🍗', 
#   payer_id: u1.id, 
#   payee_id: u2.id
# )

# payment2 = Payment.create!(
#   amount: 25.00, 
#   note: 'claws 🍻', 
#   payer_id: u3.id, 
#   payee_id: u4.id
# )

# payment3 = Payment.create!(
#   amount: 22.25, 
#   note: 'Shochu 🍶', 
#   payer_id: u5.id, 
#   payee_id: u6.id
# )

# payment4 = Payment.create!(
#   amount: 220, 
#   note: 'best snowboarding trip ever ❄️ 🏂', 
#   payer_id: u1.id, 
#   payee_id: u2.id
# )

# payment5 = Payment.create!(
#   amount: 30, 
#   note: 'donuts!', 
#   payer_id: u2.id, 
#   payee_id: u7.id
# )

