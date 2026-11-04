CREATE TABLE IF NOT EXISTS study_progress (
  email      text        NOT NULL,
  contest    text        NOT NULL CHECK (contest IN ('sema','camara')),
  data       jsonb       NOT NULL,
  updated_at bigint      NOT NULL,
  PRIMARY KEY (email, contest)
);

CREATE TABLE IF NOT EXISTS ai_usage (
  email text    NOT NULL,
  day   date    NOT NULL,
  count integer NOT NULL DEFAULT 0,
  PRIMARY KEY (email, day)
);
