--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-05-01 15:55:06

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 16400)
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    "Id" integer,
    "UserId" integer NOT NULL,
    "CreatedDate" date,
    "Text" character varying(255)
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16398)
-- Name: messages_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.messages_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.messages_user_id_seq OWNER TO postgres;

--
-- TOC entry 2829 (class 0 OID 0)
-- Dependencies: 203
-- Name: messages_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.messages_user_id_seq OWNED BY public.messages."UserId";


--
-- TOC entry 202 (class 1259 OID 16395)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    "Id" integer NOT NULL,
    "Username" character varying(30),
    "CreatedDate" date
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 2691 (class 2604 OID 16403)
-- Name: messages UserId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages ALTER COLUMN "UserId" SET DEFAULT nextval('public.messages_user_id_seq'::regclass);


--
-- TOC entry 2823 (class 0 OID 16400)
-- Dependencies: 204
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages ("Id", "UserId", "CreatedDate", "Text") FROM stdin;
1	1	2020-04-30	Hey there
2	2	2020-04-30	Hello again
\.


--
-- TOC entry 2821 (class 0 OID 16395)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users ("Id", "Username", "CreatedDate") FROM stdin;
1	R	2020-04-30
2	Kev	2020-04-30
3	Don	2020-04-30
100	Ted	\N
\.


--
-- TOC entry 2830 (class 0 OID 0)
-- Dependencies: 203
-- Name: messages_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.messages_user_id_seq', 1, false);


--
-- TOC entry 2693 (class 2606 OID 24577)
-- Name: users id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT id PRIMARY KEY ("Id");


--
-- TOC entry 2694 (class 2606 OID 24578)
-- Name: users UserId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UserId" FOREIGN KEY ("Id") REFERENCES public.users("Id");


-- Completed on 2020-05-01 15:55:07

--
-- PostgreSQL database dump complete
--

