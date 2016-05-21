'use strict';
var data = '%data%';

var bio = {
    'name': 'Kara Anderson',
    'role': 'Front-End Web Developer',
    'contacts': [{
        'mobile': '410-555-5555',
        'email': 'karashirl@gmail.com',
        'github': 'karashirl',
        'twitter': '@karashirl',
        'location': 'Baltimore, MD'
    }],
    'welcomeMessage': 'Motivated front-end web developer seeking an entry-level position with an innovative company that challenges me and offers opportunities for growth. Self-taught HTML, CSS and JavaScript and currently pursuing formal web development degree. Background in digital marketing, seeking a career change.',
    'skills': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'web design', 'marketing', 'social media'],
    'biopic': 'images/headshot.png',
    display: function () {
        var $header = $('#header');
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedPic = HTMLbioPic.replace(data, bio.biopic);
        var formattedIntro = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

        for (var contact in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contact)) {
                var thisContact = bio.contacts[contact];
                var formattedLocation = HTMLlocation.replace(data, thisContact.location);
                var formattedGithub = HTMLgithub.replace(data, thisContact.github);
                var formattedTwitter = HTMLtwitter.replace(data, thisContact.twitter);
                var formattedEmail = HTMLemail.replace(data, thisContact.email);
                var formattedMobile = HTMLmobile.replace(data, thisContact.mobile);

                $header.prepend(formattedName, formattedRole);
                $('#topContacts').prepend(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
                $header.append(formattedPic, formattedIntro);
                $('#footerContacts').prepend(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
            }
        }

        $header.append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $('#skills').append(formattedSkill);
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'United Way of Central Maryland',
        'title': 'Interactive Marketing Specialist',
        'location': 'Baltimore, MD',
        'dates': 'August 2012 - Present',
        'description': 'Oversee organization’s web marketing strategy by creating engaging content that drives users to action, create and manage all content for responsive WordPress site (uwcm.org), report on traffic and analyze trends using Google Analytics'
    }, {
        'employer': 'MOS Creative',
        'title': 'Marketing Consultant & Project Manager',
        'location': 'Columbia, MD',
        'dates': 'April 2012 - August 2012',
        'description': 'Researched, developed and helped execute creative online marketing initiatives to help clients connect more effectively with their target market and generate more leads, conducted thorough competitive and market analyses to understand the state of clients’ industries, analyzing strengths, weaknesses, opportunities and threats'
    }, {
        'employer': 'Self-Employed',
        'title': 'ESL Instructor',
        'location': 'Jundiai, Sao Paulo, Brazil',
        'dates': 'January 2011 - March 2012',
        'description': 'Managed classroom and in-company lessons for more than 15 groups of foreign language students, created personal brand identity and carried out marketing activities to attract both individual students and large companies as customers'
    }, {
        'employer': 'MediaVest Worldwide',
        'title': 'Digital Media Planning Intern',
        'location': 'New York, NY',
        'dates': 'June 2008 - August 2008',
        'description': 'Worked with digital media planning team at agency to plan online advertising strategy for Walmart Stores, documented online advertising tactics and media placement schedule to track success of campaigns'
    }, {
        'employer': 'ECI-Find New Markets',
        'title': 'Marketing Project Manager & Graphic Designer',
        'location': 'Columbia, SC',
        'dates': 'September 2007 - September 2010',
        'description': 'Managed development of comprehensive branding and communications strategies for over 20 domestic and international companies while advancing internal goals of marketing company, boosted client brand awareness and exposure by planning and implementing marketing, advertising, public relations and social media campaigns, working within tight budget constraints'
    }],
    display: function () {
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                var thisJob = work.jobs[job];
                var formattedEmployer = HTMLworkEmployer.replace(data, thisJob.employer);
                var formattedTitle = HTMLworkTitle.replace(data, thisJob.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDates = HTMLworkDates.replace(data, thisJob.dates);
                var formattedLocation = HTMLworkLocation.replace(data, thisJob.location);
                var formattedDesc = HTMLworkDescription.replace(data, thisJob.description);

                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDesc);
            }
        }
    }
};

var education = {
    'schools': [{
        'name': 'University of South Carolina',
        'location': 'Columbia, SC, US',
        'degree': 'BA, Business Administration',
        'majors': ['Marketing'],
        'dates': '2005 - 2010',
        'url': 'www.sc.edu'
    }, {
        'name': 'University of South Carolina',
        'location': 'Columbia, SC, US',
        'degree': 'BS, Journalism & Mass Communication',
        'majors': ['Advertising'],
        'dates': '2005 - 2010',
        'url': 'www.sc.edu'
    }],
    'onlineCourses': [{
        'title': 'Front-End Web Development',
        'school': 'Udacity',
        'date': '2016 - Present',
        'url': 'www.udacity.com'
    }],
    display: function () {
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                var thisSchool = education.schools[school];
                var formattedSchool = HTMLschoolName.replace(data, thisSchool.name);
                var formattedDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
                var schoolDegree = formattedSchool + formattedDegree;
                var formattedDates = HTMLschoolDates.replace(data, thisSchool.dates);
                var formattedLocation = HTMLschoolLocation.replace(data, thisSchool.location);
                var formattedMajor = HTMLschoolMajor.replace(data, thisSchool.majors);

                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(schoolDegree, formattedDates, formattedLocation, formattedMajor);
            }
        }

        $('#education').append(HTMLonlineClasses);
        $('#education').append(HTMLschoolStart);

        for (var onlineCourse in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
                var thisCourse = education.onlineCourses[onlineCourse];
                var formattedOnlineTitle = HTMLonlineTitle.replace(data, thisCourse.title);
                var formattedOnlineSchool = HTMLonlineSchool.replace(data, thisCourse.school);
                var titleSchool = formattedOnlineTitle + formattedOnlineSchool;
                var formattedOnlineDates = HTMLonlineDates.replace(data, thisCourse.date);
                var formattedOnlineURL = HTMLonlineURL.replace(data, thisCourse.url);

                $('.education-entry:last').append(titleSchool, formattedOnlineDates, formattedOnlineURL);
            }
        }
    }
};

var projects = {
    'projects': [{
        'title': 'Portfolio',
        'dates': "2016",
        'description': 'A portfolio site featuring projects I have designed and built -- both from scratch and using Bootstrap framework -- with HTML, CSS and JavaScript.',
        'images': ['images/portfolio_sm.jpg']
    }, {
        'title': 'Neighborhoods of Baltimore',
        'dates': "2016",
        'description': 'A responsive page built from scratch featuring six Baltimore neighborhoods. Transitions were created with JavaScript and CSS.',
        'images': ['images/baltimore_neighborhoods_sm.jpg']
    }, ],
    display: function () {
        for (var project in projects.projects) {
            if (projects.projects.hasOwnProperty(project)) {
                var thisProject = projects.projects[project];
                var formattedTitle = HTMLprojectTitle.replace(data, thisProject.title);
                var formattedDates = HTMLprojectDates.replace(data, thisProject.dates);
                var formattedDesc = HTMLprojectDescription.replace(data, thisProject.description);
                var formattedImage = HTMLprojectImage.replace(data, thisProject.images);

                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(formattedTitle, formattedDates, formattedDesc, formattedImage);
            }
        }
    }
};

projects.display();
bio.display();
work.display();
education.display();

$('#mapDiv').append(googleMap);