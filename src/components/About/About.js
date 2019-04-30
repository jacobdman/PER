import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.root,
  },
  divider: {
    ...theme.divider,
  },
  copyright: {
    ...theme.copyright,
  },
  paper: {
    ...theme.paper,
  },
  content: {
    ...theme.content,
  },
  member: {
    // font-size: 20px;
  },
});

const Home = ({ classes }) => {
  return (
    <div className={classes.paper}>
      <div className={classes.content}>
        <h1>About Us</h1>
        <div className={classes.divider} />
        <div className={classes.member} id="Jess">
          <img src="./images/Jessica-Wang.jpg" alt="" />
          <h2>Jessica Wang Dayton—Founder, Inspiration, and CEO</h2>
          <p>
            Jessica has a degree in International Business and is a serial
            entrepreneur and a transnational business executive. She overcame
            destitute beginnings in rural China and has since owned and managed
            businesses in China and the US in etail, supply chain management,
            real estate, and education. She has a dream to help facilitate
            education in China and s currently the manager and the majority
            owner of the Asian Market chain of Oriental supermarkets in Utah as
            well as the Founder and CEO of Prosperity Education Route. Jessica
            is also a wonderful wife, mother, daughter and inspiration to us
            all.
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <h2>David Dayton—Founder, Content Provider, Presenter</h2>
          <p>
            David has more than 25 years of experience working in Thailand and
            Greater China. He started his own companies in Taiwan, China and
            Thailand as well as worked for consulting firms, gas and telecom
            companies, media groups, schools, NGO’s and factories. In China,
            Thailand and the US he has managed QA, logistics, and human
            resources for both his own companies and for others. He is a founder
            of Silk Road International, PER, Grasshopper Tours, The China
            Sourcing Information Center and was the original editor and content
            provider of the China Sourcing Magazine.
            <br />
            <img src="./images/David-Dayton.jpg" alt="" />
            <br />
            David is also is a sought after speaker and consultant, on topics
            centering on Thai and Chinese corporate cultures and practices and
            well as family and educational success. For the last decade he has
            consulted with banks, airlines, factories, SMEs, MNCs, families and
            schools, with the goal of helping them work to better their
            relationships, operations, cross-cultural understandings and
            futures. He and has been the keynote speaker in events in Chinese
            and English in China, Hong Kong, Thailand, UAE and the United States
            and has given hundreds of professional and academic presentations.
            He has been published in academic and professional journals and been
            interviewed by CNN, CBS, BBC, 60 Minutes, EuroBiz and others.
            <br />
            <br />
            In a past life, David was a drummer in a rock band, an on-air
            personality for two radio stations, a national collegiate speech and
            debate champion, and a missionary. He currently teaches Business
            Development in China at Utah Valley University, speaks Thai and
            Mandarin and has completed two MAs focusing on Thai Urban and
            Corporate Cultures. He is also a PhD Candidate (ABD) in FIU’s Global
            Sociocultural Studies program. His work emphasizes Business
            Anthropology with his dissertation focus on Chinese corporate
            cultures in Southeast Asia.
            <br />
            <br />
            David is most proud to be the father of 6 wonderful children and the
            husband to the beautiful Jessica. He is the fifth of eleven siblings
            and the son of Dr. Lynn T. Dayton and Senator Margaret Dayton. His
            hobbies include travel, ethnography, Buddhism, eating, and
            triathlons.
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <img src="./images/Terri-Leichty.jpg" alt="" id="Terri" />
          <br />
          <h2>
            Terri O’Brien Liechty—Founder, 7 Habits-School Principle, Trainer,
            and Content Provider
          </h2>
          <p>
            Terri O’Brien Liechty is a 40-year educator, and currently the
            Principal at Ivy Hall Academy in Provo, Utah.  Her teaching has
            taken her to all 50 states in America, and also various locations in
            Europe, where she has taught in public, private and international
            schools.  She and her childhood sweetheart/husband have raised 7
            highly successful and happy children, all of whom have married, and
            who have provided them with 26 wonderful grandchildren.  Her focus
            has always been happiness and excellence in the family and in
            education.  A leader in her many communities, Terri embraces her
            international friends who often seek her educational
            counsel.  Principal Liechty has owned several businesses that she
            and her children have successfully operated. Her favorite time of
            day?  Reading or teaching music to students or grandchildren!
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <h2>
            Bethany Cole Saldinia—Founder, Curriculum Director, Content Provider
            and Presenter.
          </h2>
          <img src="./images/Beth.jpg" alt="" />
          <p>
            Bethany is an experienced youth leader and dedicated to bringing
            about positive changes in those she teaches. For over seven years
            Bethany has lead youth to create positive changes in their lives
            through various methods: classroom instruction, one-on-one goal
            setting, motivation, and creating tailored plans of action. She
            specializes in working with girls ages 14-16. She was instrumental
            in helping students gain admission into top universities such as
            Cornel University and Brigham Young University. Not only has she
            impacted the young women she serves but their parents as well. She
            served as the Education Manager and Facilitator for a chapter of the
            world’s largest woman’s organization for five years where she taught
            topics such as; parent-child bonding, content communication,
            self-reliance, financial independence, home education, and
            cultivating love. She cares deeply for the families she works with
            and will go the distance to help them meet their goals. Bethany has
            done service in countries Latin American, including The Dominican
            Republic, Guatemala, Argentina, Peru, and Mexico. One of Bethany’s
            strongest qualities is her ability to make others feel loved and
            accepted. Bethany is a skilled facilitator. In her career as a
            Customer Service Trainer, she learned the art of engaging her
            students through various techniques such as, humor, story telling,
            expressiveness. As a trained Opera Singer and Stage Performer, she
            learned to gage the interest of her audience and can easily switch
            up the delivery style to ensure engagement and student retention.
            Parents and children alike enjoy the meaningful classes taught by
            Bethany. She has obtained a Bachelor’s of Science in Family Studies
            from Brigham Young University and a Master’s of Science in
            Organization Development and Knowledge Management from George Mason
            University. Bethany resides in Provo, Utah with her husband and
            three boys. She loves being a mom and is passionate about helping
            children and parents strengthen their relationships.
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <h2>James Strickler—Content Provider, and Presenter.</h2>
          <p>
            Dr. V. James Strickler, JD PhD was born in the small town of Sweet
            Home, Oregon (population 6,000), where he was raised by his single
            mother along with two siblings. After serving for two years as a
            missionary for the Church of Jesus Christ of Latter-day Saints, he
            enrolled at Brigham Young University (BYU) in Provo, Utah. He is the
            first generation in his family to attend college. At BYU, he earned
            a Bachelor of Arts degree in Political Science & History Teaching.
            He then attended the J. Reuben Clark Law School at BYU, where he
            earned a Juris Doctorate. He next earned a Doctor of Philosophy
            Degree, in American Politics, from Stanford University in Palo Alto,
            California. Dr. Strickler now has over 2O years of experience
            teaching at colleges and universities, including at Valdosta State
            University, Utah State University, San Jose State University,
            Brigham Young University, and Stanford University. He has published
            numerous scholarly works in such places as the Harvard International
            Journal of Press/Politics and the Georgia Law Review, and with
            Cambridge University Press.
            <br />
            <img src="./images/James-Strickler.JPG" id="James" alt="" />
            <br />
            At the time that Dr. Strickler entered his graduate studies at
            Stanford, he also married his wife, Kathleen. While he was in
            graduate school, she gave birth to the first four of their eight
            children. Those eight children now range in age from 18 years old to
            6 years old. Because Kathleen suffers from several health problems,
            Dr. Strickler has often been both the income earner for his family
            and the primary care giver for his children. Nonetheless, his
            children have excelled in both academics and extracurricular
            activities. Dr. Strickler’s two oldest children each graduated from
            high school in just three years at the age of 16 and earned full
            academic scholarships to Brigham Young University. Both were also
            named as the “Star Student” of their graduating classes for having
            achieved the highest scores on the Scholastic Aptitude Test (SAT) of
            any student in their region of the State of Georgia. Both were also
            recognized as National Merit Scholars and by the State of Georgia as
            Georgia Scholars. Dr. Strickler’s third child will graduate from
            high school at nearly a year younger than the first two, and with
            even higher tests scores. Dr. Strickler’s younger children are also
            the top students in their classes. His children play piano and
            participate in such activities as math competitions, robotics
            competitions, choir competitions, Scouting, theater arts, and
            various sports. Dr. Strickler’s three oldest children have all been
            members of Georgia’s All-State Chorus each year since middle school.
            The family currently resides in Valdosta, Georgia.
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <h2>
            Jonathan Sherman—Marriage and Family Consultant, Content Provider
            and Presenter.
          </h2>
          <p>
            Jonathan Sherman, LMFT is a Relationship Strategist (Licensed
            Marriage & Family Therapist) and Speaker specializing in “creating
            greatness in relationships.” He is the president of Jonathan
            Sherman, International and MarriageEnvy.com.
            <br />
            <br />
            His three main areas of focus are self-mastery, couple’s work, and
            parent training. He is assists people in learning how to improve
            their marriages, their parenting and themselves through skill
            development, life coaching, overcoming depression and anxiety,
            stress and anger management, and addiction recovery. He speaks and
            teaches extensively on a wide range of relationship topics in both
            the community and professional sectors.
            <br />
            <img src="./images/Jonathan-Sherman.jpg" id="Jonathan" alt="" />
            <br />
            Jonathan was previously the Director of Training and Development for
            PeopleSmarts—a leadership development firm specializing in the field
            of emotional intelligence. Further, he was the Youth Substance Abuse
            Coordinator for Valley Mental Health in Summit County, UT and an
            instructor for the State of Utah’s Shared Parenting Course for
            Divorcing Parents. His background includes residential addiction
            treatment, domestic violence perpetrator and victim treatment, at-
            risk youth services, and home-based family therapy services.
            <br />
            <br />
            He has written over a hundred articles for his GREAT Relationships
            newspaper column and blog and has developed numerous products for
            professionals and lay people alike. He was awarded the Outstanding
            Education Award by The Utah Behavioral Healthcare Network for
            “recognition of outstanding efforts in presenting the public with
            accurate, meaningful and current information about mental illness.”
            Further, he has been nominated for the WEGO Health Activist Award.
            <br />
            <br />
            He works closely with civic and community leaders in crafting
            solutions to strengthen marriages and families in the community
            through providing consulting on best outreach practices. Further, he
            founded The Relationship Mastery SeriesTM workshops designed to
            strengthen families and enrich our community.
            <br />
            <br />
            He has worked with school districts and educators in creating
            effective solutions to difficult behavioral and emotional problems
            with their students. He has developed the Be the Answer: Solutions
            to BullyingTM prevention and intervention program modeled on
            evidence- and researched-based solutions. He conducts teacher
            training and school assemblies on this and other topics such as the
            popular Parenting with Love & Logic curriculum.
            <br />
            <br />
            Jonathan did his undergraduate work in Family Sciences at Brigham
            Young University and his master’s work in Marriage and Family
            Therapy at Northern Illinois University.
            <br />
            <br />
            He is married to a lovely and skilled husband trainer who has truly
            earned her keep. They live in eternal bliss (okay, fairly peaceably)
            with their four children in the Rocky Mountains of Utah.
            <br />
            <br />
            Jonathan has been passionately educating individuals, couples,
            families and groups about building strong families and creating
            great relationships since 1993.
          </p>
        </div>
        <div classname={classes.divider} />
        <h1 class="OtherPER">Other PER Contributors and Participants</h1>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <h2>Krista Kacey—Editor, Content Provider, and Presenter.</h2>
          <p>
            <img src="./images/Krista.JPG" id="Krista" alt="" />
            Krista is a gifted performer and actress and an award-winning public
            speaker who has starred in plays in community and university
            theaters. She is personable teacher, a professional editor with a
            degree in Communications, Journalism, and a mother of four children.
            As a lifelong learner, she has a constant thirst for knowledge and
            is passionate about sharing what she has learned with others. From a
            young age she began playing school and only dreaming about teaching
            in a real classroom until she could enjoy teaching everything from
            elementary to university classes.
            <br />
            <br />
            After graduation from Brigham Young University, Krista immediately
            journeyed to Mainland China. There, she worked in a university’s
            English Department editing all things English and coaching graduate
            students in academic writing. After residing several more years in
            Taiwan and Thailand, where she did technical business editing,
            Krista returned to the States and contracted work editing for
            websites, master’s theses and graduate school applications. She has
            also written multiple short stories for children, including a
            treatment for animation. She treasures quality time with her own
            family as well as connecting with her beloved global “family.”
            <br />
            <br />
            Her experiences now include teaching at a university in Chongqing,
            teaching elementary classes in Taiwan, privately tutoring learning
            disabled children, preparing students for college exams, teaching in
            her state's top charter school, and homeschooling her own children
            for several years. Most recently, Krista has helped found a new
            charter school based on Montessori and entrepreneurship principles
            that opened this fall.
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member} id="Michael">
          <img src="./images/Michael-Dayton.png" alt="" />
          <h2>Michael Dayton—Mandarin Presenter and Camp Facilitator</h2>
          <p>
            Michael is a member of the US Army, a student at Utah Valley
            University, a certified auto mechanic, and an Eagle Scout who speaks
            Mandarin. Michael has spent more than 6 years living and working in
            China and Taiwan and is pursuing goals to be a certified trainer and
            Army Ranger.
          </p>
        </div>
        <div classname={classes.divider} />
        <div className={classes.member}>
          <h2>
            Michael and Cynthia Simpson—8 Habits Consultants, Content Providers
            and Presenters.
          </h2>
          <div class="Divider" />
          <h2>Cindy Hatton—Recruitment Specialist, Camp Facilitator.</h2>
        </div>
        <p className={classes.copyright}>© 2018 Prosperity Education Route.</p>
      </div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
