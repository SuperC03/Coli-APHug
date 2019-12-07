const religions = [
	[
		{
			id: 0,
			name: "Christianity",
			gods: ["God"],
			followerCount: "2.19 Billion",
			followers: "Christians",
			description: `Christianity came from what was originally Judaism. Christians believe that Jesus Christ, a born Jew, died on a cross. After resurrecting from the dead, he instructed his disciples to spread his doctrine around the known world.
						From there, Christianity continued to thrive. In the year 1054, the Roman Catholic and the Eastern Orthodox churches split. In the late 1500's, the Protestant Church split from the Catholic Church. Nowadays, Christianity is the most prominent religion in the world, making up for more than thirty percent of religious practitioners`,
			mainImage:
				"https://cruxnow.com/wp-content/uploads/2018/04/pilgrims_from_the_Italian_dioceses_of_Bologna_and_Cesena_Sarsina_in_St_Peters_Square_CNA.jpg",
			deityBelief: "Monotheism",
			spreadType: "Globalizing",
			birthplace: "Palestine",
			founder: "Jesus Christ",
			subdivisions: ["Catholicism", "Orthodox Christianity", "Protestantism"]
		},
		{
			id: 1,
			name: "Islam",
			gods: ["Allah"],
			followerCount: "1.8 Billion",
			followers: "Muslims",
			description: `Islam is a globalizing religion centered around five moral pillars. They are the belief that Allah is the true god and Muhammad is his true messenger, that one must pray five times a day, one must donate generously,
							 one must fast during the month of Ramadan, and that there is a mandatory pilgrimage to the holy city Mecah.
							The Islamic religion split into two different branches, the Shiites and the Sunnis, after arguing on who the successor to Mohammad would be. Muslims make up more than twenty percent of the world's religious followers.`,
			mainImage: "http://d279m997dpfwgl.cloudfront.net/wp/2017/07/0717_islam-1000x667.jpg",
			deityBelief: "Monotheism",
			spreadType: "Globalizing",
			birthplace: "Saudi Arabia",
			founder: "Muhammad",
			subdivisions: ["Shiite", "Sunni"]
		},
		{
			id: 2,
			name: "Buddhism",
			gods: ["N/A"],
			followerCount: "488 Million",
			followers: "Buddhists",
			description: `Buddhism is another globalizing religion with its own set of religious truths.  They are the fact that everything must endure suffering, that suffering leads to reincarnation, that the goal of life is to escape the cycle of suffering and rebirth into 'Nirvana,' and that Nirvana can be achieved through an "Eighfold Path"
							This path consists of belief, resolve, speech, action, livelihood, effort, thought, and meditation. Buddhism was started by prince Siddhartha Gautama. After seeing poverty and suffering for the first time, he decided to learn achieve enlightenment. He later passed these teachings on to his followers.
							Nowadays, Buddhism is split into branches based on different levels of strictness in daily practices.`,
			mainImage: "https://img.theculturetrip.com/x/smart/wp-content/uploads/2017/03/adult-1807526_1920.jpg",
			deityBelief: "Nontheism",
			spreadType: "Globalizing",
			birthplace: "Lumbini, Nepal",
			founder: "Siddhartha Gautama",
			subdivisions: ["Theravada", "Mahayana", "Vajrayana"]
		}
	],
	[
		{
			id: 3,
			name: "Hinduism",
			gods: ["Vishnu", "Shiva", "Brahama"],
			followerCount: "1.2 Billion",
			followers: "Hindus",
			description: `Hinduism is an ethnic religion without a clear founder nor hearth. The religion is actually a combination of several elements from various people living in the Indus Valley area including bathing ceremonies and sacrifices. From Central Asia, it was brought down to Southern Asia by warring Aryan tribes. 
							Hinduism is polytheistic religion, having many gods. The three most important gods are Brahama, Vishnu, and Shiva, each controlling creation, preservation, and destruction, respectively.`,
			mainImage:
				"https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2019/1/3/2916caba8bd5458497029e7fbb5c4146_18.jpg",
			deityBelief: "Polytheism",
			spreadType: "Ethnic",
			birthplace: "Indus Valley",
			founder: "Unknown",
			subdivisions: ["N/A"]
		},
		{
			id: 4,
			name: "Judaism",
			gods: ["God"],
			followerCount: "14.6 Million",
			followers: "Jews",
			description: `Judaism is an ethnic religion, although it has a rather clear founder/hearth. Judaism was presumably started by a man named Abraham. Having many descendants, he and his family made up for both the religion and the ethnicity. The "jew" was originally used as slang to refer to those from the King of Judah, while they were in captivity. 
							As before mentioned, Judaism is considered by some to be an ethnicity as well as a religion. There are a large portions of secular Jews, but but they are still deemed 'Jewish' by many.`,
			mainImage:
				"https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg3MjM2MTMwMTIx/israel-religion-jewish-pesach-blessing.jpg",
			deityBelief: "Monotheism",
			spreadType: "Ethnic",
			birthplace: "Israel",
			founder: "Abraham",
			subdivisions: ["N/A"]
		}
	]
];

export default religions;
