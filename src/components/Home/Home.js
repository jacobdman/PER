import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomImg from '../../assets/PER_Background_Bottom.png';

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
  bottomImg: {
    ...theme.bottomImg,
  },
});

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <div className={classes.content}>
          <h1>Introduction</h1>
          <div className={classes.divider} />
          <p>
            Prosperity Education Route (PER) is a Utah-based global education
            company that strives to make a positive impact on the world and
            individual families. PER’s goal is to empower and strengthen
            students and families with practical skills that enable generational
            success. PER’s dedicated trainers and original content transform
            lives, by preparing students to successfully study abroad, to be
            trailblazers in their careers, and by helping them meet the needs of
            an ever-evolving global community. PER’s Trainers have a commitment
            to values and people and are passionate about teaching the leaders
            of tomorrow. PER delivers life-transforming and motivating
            principles that will give students and families a solid foundation
            and a competitive edge. PER is committed to making a positive
            difference in the lives of individuals, encouraging them to unite
            with their generational families and achieve their dreams!
          </p>
          <p>
            PER offers regular public and private educational opportunities to
            students, families, groups, and corporations in China, Thailand and
            the US. Currently, PER offers courses for families, students, and
            educators in the following topic areas:
          </p>
          <p>
            The 8 Habits of Highly Effective People/Families/Teens: Covey’s
            world-famous and proven skills for a happy and successful life.
          </p>
          <p>
            Successful Families, Positive Relationships: Parenting skills, and
            family patterns that can lead to lasting happy relationships and
            mature young adults.
          </p>
          <p>
            Becoming Global Leaders: Skills training and educational habits that
            parents and children need to thrive in a global environment.
          </p>
          <p>
            Succeeding in International Schools: Successful strategies and
            instructions for schooling, activities, applications, and university
            life that students need to both get accepted in and succeed at elite
            schools in the West.
          </p>
          <p>
            Balancing Expectations and Reality: Family and individual strategies
            for balancing the stress, expectations, and requirements of schools,
            parents, future employers, and spouses, with individual dreams,
            opportunities and limitations.
          </p>
          <p>
            Generational Family Traditions: Practical courses in manners,
            curtesy, and polite behaviors that are expected of international
            professional and cultural elites.
          </p>
          <p>
            Speaking and Public Presentations: Critical thinking, performance,
            and presentation skills for educational and professional
            negotiations/debates and public speaking.
          </p>
          <p className={classes.copyright}>
            © 2018 Prosperity Education Route.
          </p>
        </div>
      </div>
      {/* <img className={classes.bottomImg} src={BottomImg} alt="Logo" /> */}
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
