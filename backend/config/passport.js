import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import passport from "passport";
passport.serializeUser((user, done) => {
  done(null, user.id); // Use a unique identifier from the user object
});

const configurePassport = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) return done(null, false, { message: "No user found" });

          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) return done(null, user);
          else return done(null, false, { message: "Incorrect password" });
        } catch (err) {
          done(err);
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3600/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if the user already exists
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            // Create a new user if not found
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
            });
            await user.save();
          }

          done(null, user); // Pass the user to serializeUser
        } catch (err) {
          done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize by user ID
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id); // Find user by ID
      done(null, user); // Pass the user object to req.user
    } catch (err) {
      done(err, null);
    }
  });
};

export default configurePassport;
