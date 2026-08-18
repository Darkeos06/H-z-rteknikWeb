import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_why_choose_us_features_icon" AS ENUM('7-24-hizmet', 'sertifikali-usta', 'profesyonel-uzmanlik', 'seffaf-fiyatlandirma', 'iscilik-ve-malzeme-garantisi', '25-yillik-tecrube', 'memnuniyet-garantisi');
  CREATE TYPE "public"."enum_pages_blocks_page_hero_block_impact" AS ENUM('HIGH', 'MEDIUM', 'LOW');
  CREATE TYPE "public"."enum_pages_blocks_grid_section_block_values_icon" AS ENUM('7-24-hizmet', 'sertifikali-usta', 'profesyonel-uzmanlik', 'seffaf-fiyatlandirma', 'iscilik-ve-malzeme-garantisi', '25-yillik-tecrube', 'memnuniyet-garantisi', 'email', 'phone', 'address');
  CREATE TYPE "public"."enum_pages_blocks_faq_block_variant" AS ENUM('subtle', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_why_choose_us_features_icon" AS ENUM('7-24-hizmet', 'sertifikali-usta', 'profesyonel-uzmanlik', 'seffaf-fiyatlandirma', 'iscilik-ve-malzeme-garantisi', '25-yillik-tecrube', 'memnuniyet-garantisi');
  CREATE TYPE "public"."enum__pages_v_blocks_page_hero_block_impact" AS ENUM('HIGH', 'MEDIUM', 'LOW');
  CREATE TYPE "public"."enum__pages_v_blocks_grid_section_block_values_icon" AS ENUM('7-24-hizmet', 'sertifikali-usta', 'profesyonel-uzmanlik', 'seffaf-fiyatlandirma', 'iscilik-ve-malzeme-garantisi', '25-yillik-tecrube', 'memnuniyet-garantisi', 'email', 'phone', 'address');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_variant" AS ENUM('subtle', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_services_blocks_grid_section_block_values_icon" AS ENUM('7-24-hizmet', 'sertifikali-usta', 'profesyonel-uzmanlik', 'seffaf-fiyatlandirma', 'iscilik-ve-malzeme-garantisi', '25-yillik-tecrube', 'memnuniyet-garantisi', 'email', 'phone', 'address');
  CREATE TYPE "public"."enum_services_blocks_faq_block_variant" AS ENUM('subtle', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum_services_icon" AS ENUM('asma-tavan-sistemleri', 'alci-duvar-uygulamalari', 'ytong-tugla-duvar', 'alci-isleri', 'ic-mekan-boyama', 'elektrik-ariza-onarimi', 'dimmer-anahtar-montaji', 'spot-montaji', 'led-aydinlatma-sistemleri', 'elektrik-sayaci-montaji', 'salter-montaj-ve-degisimi', 'jenerator-baglantisi', 'zayif-akim-tesisati', 'kablo-kanali-doseme', 'topraklama-hatti-cekimi', 'elektrik-tesisati-yenileme', 'kacak-akim-rolesi-montaji', 'aydinlatma-tesisati', 'sensor-montaji', 'avize-montaji', 'priz-ve-anahtar-degisimi', 'sigorta-kutusu-yenileme', 'tesisat-kablolari-yenileme', 'elektrik-panosu-yenileme', 'elektrik-ariza-tespiti', 'tesisat-izolasyonu', 'sicak-su-sistemi-kurulumu', 'otomasyon-sistemi-kurulumu', 'gaz-kacagi-tespiti-ve-onarimi', 'isi-istasyonu-kurulum-ve-bakimi', 'kalorifer-tesisati-yenileme', 'isi-pompasi-montaj-ve-bakimi', 'brulor-bakim-ve-tamiri', 'havalandirma-sistemi-kurulumu', 'fancoil-sistem-montaj-ve-bakimi', 'vrf-vrv-sistem-kurulumu', 'termostatik-vana-montaji', 'radyator-montaj-ve-degisimi', 'dogalgaz-tesisat-doseme-ve-bakimi', 'kazan-dairesi-bakim-ve-onarimi', 'yerden-isitma-sistem-kurulumu', 'cift-yonlu-ilacli-petek-temizligi', 'klima-montaj-sokum-ve-bakimi', 'kombi-montaj-tamir-ve-bakimi', 'merkezi-kalorifer-sistemi-kurulumu-ve-bakimi', 'basinc-testi-ve-kontrol', 'termal-kamera-ile-kacak-tespiti', 'rogar-ve-kanal-temizligi', 'yagmur-suyu-drenaji', 'dusakabin-kurulumu', 'lavabo-ve-klozet-montaji', 'musluk-ve-batarya-montaji', 'pis-su-tesisati-doseme', 'pompa-sistemleri-kurulumu', 'su-deposu-bakim-ve-temizligi', 'pprc-boru-tesisati', 'temiz-su-tesisati-doseme', 'tesisat-yenileme-ve-tadilat', 'tikaniklik-acma-hizmeti', 'pis-su-gider-acma', 'su-kacagi-tespiti-ve-tamiri', 'drenaj-hatti-ve-kuyusu-yapimi', 'su-aritma-ve-yumusatma-sistemleri', 'su-sayaclari-kollektor-tesisati', 'hidrofor-tesisati-kurulumu', 'jet-sistemi-montaj-ve-tamiri', 'su-seviye-kontrolu-ve-ayari', 'havuz-kimyasallari-tedariki', 'havuz-firca-ve-supurge-sistemleri', 'kis-bakimi-ve-koruma', 'havuz-tesisat-yenileme', 'havuz-motoru-bakim-ve-tamiri', 'ph-dengeleme-sistemi-kurulumu', 'klor-jeneratoru-montaji', 'skimmer-ve-suzgec-degisimi', 'havuz-kaplama-ve-izolasyonu', 'uv-sterilizasyon-sistemi-montaji', 'havuz-robotu-tamiri', 'havuz-isitma-sistemi-kurulumu', 'havuz-aydinlatma-sistemi-montaji', 'otomatik-dozajlama-sistemi-kurulumu', 'havuz-filtre-sistemi-bakimi', 'havuz-pompasi-montaj-ve-tamiri', 'havuz-suyu-analizi-ve-ilaclama', 'havuz-bakimi-ve-temizligi');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_blocks_grid_section_block_values_icon" AS ENUM('7-24-hizmet', 'sertifikali-usta', 'profesyonel-uzmanlik', 'seffaf-fiyatlandirma', 'iscilik-ve-malzeme-garantisi', '25-yillik-tecrube', 'memnuniyet-garantisi', 'email', 'phone', 'address');
  CREATE TYPE "public"."enum__services_v_blocks_faq_block_variant" AS ENUM('subtle', 'light', 'dark', 'primary');
  CREATE TYPE "public"."enum__services_v_version_icon" AS ENUM('asma-tavan-sistemleri', 'alci-duvar-uygulamalari', 'ytong-tugla-duvar', 'alci-isleri', 'ic-mekan-boyama', 'elektrik-ariza-onarimi', 'dimmer-anahtar-montaji', 'spot-montaji', 'led-aydinlatma-sistemleri', 'elektrik-sayaci-montaji', 'salter-montaj-ve-degisimi', 'jenerator-baglantisi', 'zayif-akim-tesisati', 'kablo-kanali-doseme', 'topraklama-hatti-cekimi', 'elektrik-tesisati-yenileme', 'kacak-akim-rolesi-montaji', 'aydinlatma-tesisati', 'sensor-montaji', 'avize-montaji', 'priz-ve-anahtar-degisimi', 'sigorta-kutusu-yenileme', 'tesisat-kablolari-yenileme', 'elektrik-panosu-yenileme', 'elektrik-ariza-tespiti', 'tesisat-izolasyonu', 'sicak-su-sistemi-kurulumu', 'otomasyon-sistemi-kurulumu', 'gaz-kacagi-tespiti-ve-onarimi', 'isi-istasyonu-kurulum-ve-bakimi', 'kalorifer-tesisati-yenileme', 'isi-pompasi-montaj-ve-bakimi', 'brulor-bakim-ve-tamiri', 'havalandirma-sistemi-kurulumu', 'fancoil-sistem-montaj-ve-bakimi', 'vrf-vrv-sistem-kurulumu', 'termostatik-vana-montaji', 'radyator-montaj-ve-degisimi', 'dogalgaz-tesisat-doseme-ve-bakimi', 'kazan-dairesi-bakim-ve-onarimi', 'yerden-isitma-sistem-kurulumu', 'cift-yonlu-ilacli-petek-temizligi', 'klima-montaj-sokum-ve-bakimi', 'kombi-montaj-tamir-ve-bakimi', 'merkezi-kalorifer-sistemi-kurulumu-ve-bakimi', 'basinc-testi-ve-kontrol', 'termal-kamera-ile-kacak-tespiti', 'rogar-ve-kanal-temizligi', 'yagmur-suyu-drenaji', 'dusakabin-kurulumu', 'lavabo-ve-klozet-montaji', 'musluk-ve-batarya-montaji', 'pis-su-tesisati-doseme', 'pompa-sistemleri-kurulumu', 'su-deposu-bakim-ve-temizligi', 'pprc-boru-tesisati', 'temiz-su-tesisati-doseme', 'tesisat-yenileme-ve-tadilat', 'tikaniklik-acma-hizmeti', 'pis-su-gider-acma', 'su-kacagi-tespiti-ve-tamiri', 'drenaj-hatti-ve-kuyusu-yapimi', 'su-aritma-ve-yumusatma-sistemleri', 'su-sayaclari-kollektor-tesisati', 'hidrofor-tesisati-kurulumu', 'jet-sistemi-montaj-ve-tamiri', 'su-seviye-kontrolu-ve-ayari', 'havuz-kimyasallari-tedariki', 'havuz-firca-ve-supurge-sistemleri', 'kis-bakimi-ve-koruma', 'havuz-tesisat-yenileme', 'havuz-motoru-bakim-ve-tamiri', 'ph-dengeleme-sistemi-kurulumu', 'klor-jeneratoru-montaji', 'skimmer-ve-suzgec-degisimi', 'havuz-kaplama-ve-izolasyonu', 'uv-sterilizasyon-sistemi-montaji', 'havuz-robotu-tamiri', 'havuz-isitma-sistemi-kurulumu', 'havuz-aydinlatma-sistemi-montaji', 'otomatik-dozajlama-sistemi-kurulumu', 'havuz-filtre-sistemi-bakimi', 'havuz-pompasi-montaj-ve-tamiri', 'havuz-suyu-analizi-ve-ilaclama', 'havuz-bakimi-ve-temizligi');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_service_categories_icon" AS ENUM('isitma-ve-sogutma', 'elektrik-tesisat', 'elektronik-tesisat', 'sihhi-tesisat', 'cati-ve-cephe', 'yapi-insaati', 'havuz-sistemleri');
  CREATE TYPE "public"."enum_service_categories_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__service_categories_v_version_icon" AS ENUM('isitma-ve-sogutma', 'elektrik-tesisat', 'elektronik-tesisat', 'sihhi-tesisat', 'cati-ve-cephe', 'yapi-insaati', 'havuz-sistemleri');
  CREATE TYPE "public"."enum__service_categories_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_post_categories_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__post_categories_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_authors_status" AS ENUM('active', 'inactive');
  CREATE TYPE "public"."enum_blog_comments_status" AS ENUM('pending', 'approved', 'spam', 'rejected');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TABLE IF NOT EXISTS "pages_blocks_home_hero_section_heading_rotation" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_home_hero_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'home-hero',
  	"sub_heading" varchar,
  	"description" varchar,
  	"services_link_text" varchar DEFAULT 'Tüm Hizmetler',
  	"services_link_url" varchar DEFAULT '/hizmetlerimiz',
  	"images_main_image_id" integer,
  	"images_secondary_image_id" integer,
  	"cta_form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_services_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'services-carousel',
  	"heading_subtitle" varchar,
  	"heading_title" varchar,
  	"view_all_link_text" varchar DEFAULT 'Tüm Hizmetler',
  	"view_all_link_url" varchar DEFAULT '/hizmetlerimiz',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_section_certificates" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'about-section',
  	"content_subtitle" varchar,
  	"content_title" varchar,
  	"content_description" varchar,
  	"content_button_text" varchar DEFAULT 'Devamını Oku...',
  	"content_button_url" varchar DEFAULT '/hakkimizda',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_why_choose_us_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_blocks_why_choose_us_features_icon" DEFAULT '7-24-hizmet'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_why_choose_us" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'why-choose-us',
  	"image_id" integer,
  	"content_subtitle" varchar,
  	"content_title" varchar,
  	"content_description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_work_process_process_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_work_process_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_work_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'work-process',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_portfolio_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'portfolio-section',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_testimonials_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'testimonials-section',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"view_all_button_text" varchar DEFAULT 'Tüm Yorumlar',
  	"view_all_button_url" varchar DEFAULT '/yorumlar',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'blog-section',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_page_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"impact" "enum_pages_blocks_page_hero_block_impact" DEFAULT 'HIGH',
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"image_alt" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Sorununuz için Bize Ulaşın',
  	"description" varchar DEFAULT 'Her türlü tamirat, tadilat ve teknik destek ihtiyacınız için 7/24 hizmetinizdeyiz.',
  	"button_text" varchar DEFAULT 'Bizimle İletişime Geçin',
  	"button_link" varchar DEFAULT '/iletisim',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_grid_section_block_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_blocks_grid_section_block_values_icon"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_grid_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Misyonumuz ve Değerlerimiz',
  	"description" varchar DEFAULT '25 yıldır değişmeyen ilkelerimiz ve kalite standartlarımız ile hizmetinizdeyiz.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_certifications_block_certificates" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"date" varchar,
  	"image_id" integer,
  	"description" varchar,
  	"pdf_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_certifications_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sertifikalarımız',
  	"description" varchar DEFAULT 'Kalite standartlarımızı belgeleyen sertifikalarımız.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_gallery_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"src_id" integer,
  	"category_id" integer,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_gallery_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Proje Galerimiz',
  	"description" varchar DEFAULT 'Hızır Teknik olarak tamamladığımız projelerden bazı örnekler',
  	"show_title" boolean DEFAULT true,
  	"show_categories" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sıkça Sorulan Sorular',
  	"subtitle" varchar DEFAULT 'Hizmetlerimiz hakkında merak edilenler.',
  	"variant" "enum_pages_blocks_faq_block_variant" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_projects_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Örnek Projelerimiz',
  	"description" varchar DEFAULT 'Başarıyla tamamladığımız projelerden örnekler.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_testimonials_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Müşterilerimiz Ne Diyor?',
  	"description" varchar DEFAULT 'Memnun müşterilerimizin yorumları bizim için en büyük motivasyon.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"description" varchar,
  	"featured_image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"service_categories_id" integer,
  	"projects_id" integer,
  	"testimonials_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_home_hero_section_heading_rotation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_home_hero_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'home-hero',
  	"sub_heading" varchar,
  	"description" varchar,
  	"services_link_text" varchar DEFAULT 'Tüm Hizmetler',
  	"services_link_url" varchar DEFAULT '/hizmetlerimiz',
  	"images_main_image_id" integer,
  	"images_secondary_image_id" integer,
  	"cta_form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_services_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'services-carousel',
  	"heading_subtitle" varchar,
  	"heading_title" varchar,
  	"view_all_link_text" varchar DEFAULT 'Tüm Hizmetler',
  	"view_all_link_url" varchar DEFAULT '/hizmetlerimiz',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_section_certificates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'about-section',
  	"content_subtitle" varchar,
  	"content_title" varchar,
  	"content_description" varchar,
  	"content_button_text" varchar DEFAULT 'Devamını Oku...',
  	"content_button_url" varchar DEFAULT '/hakkimizda',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_why_choose_us_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_blocks_why_choose_us_features_icon" DEFAULT '7-24-hizmet',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_why_choose_us" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'why-choose-us',
  	"image_id" integer,
  	"content_subtitle" varchar,
  	"content_title" varchar,
  	"content_description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_work_process_process_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_work_process_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_work_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'work-process',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_portfolio_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'portfolio-section',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_testimonials_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'testimonials-section',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"view_all_button_text" varchar DEFAULT 'Tüm Yorumlar',
  	"view_all_button_url" varchar DEFAULT '/yorumlar',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_type" varchar DEFAULT 'blog-section',
  	"header_subtitle" varchar,
  	"header_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_page_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"impact" "enum__pages_v_blocks_page_hero_block_impact" DEFAULT 'HIGH',
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"image_alt" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Sorununuz için Bize Ulaşın',
  	"description" varchar DEFAULT 'Her türlü tamirat, tadilat ve teknik destek ihtiyacınız için 7/24 hizmetinizdeyiz.',
  	"button_text" varchar DEFAULT 'Bizimle İletişime Geçin',
  	"button_link" varchar DEFAULT '/iletisim',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_grid_section_block_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_blocks_grid_section_block_values_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_grid_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Misyonumuz ve Değerlerimiz',
  	"description" varchar DEFAULT '25 yıldır değişmeyen ilkelerimiz ve kalite standartlarımız ile hizmetinizdeyiz.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_certifications_block_certificates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"date" varchar,
  	"image_id" integer,
  	"description" varchar,
  	"pdf_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_certifications_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sertifikalarımız',
  	"description" varchar DEFAULT 'Kalite standartlarımızı belgeleyen sertifikalarımız.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_gallery_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"src_id" integer,
  	"category_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_gallery_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Proje Galerimiz',
  	"description" varchar DEFAULT 'Hızır Teknik olarak tamamladığımız projelerden bazı örnekler',
  	"show_title" boolean DEFAULT true,
  	"show_categories" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sıkça Sorulan Sorular',
  	"subtitle" varchar DEFAULT 'Hizmetlerimiz hakkında merak edilenler.',
  	"variant" "enum__pages_v_blocks_faq_block_variant" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_projects_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Örnek Projelerimiz',
  	"description" varchar DEFAULT 'Başarıyla tamamladığımız projelerden örnekler.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_testimonials_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Müşterilerimiz Ne Diyor?',
  	"description" varchar DEFAULT 'Memnun müşterilerimizin yorumları bizim için en büyük motivasyon.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_featured_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"service_categories_id" integer,
  	"projects_id" integer,
  	"testimonials_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Sorununuz için Bize Ulaşın',
  	"description" varchar DEFAULT 'Her türlü tamirat, tadilat ve teknik destek ihtiyacınız için 7/24 hizmetinizdeyiz.',
  	"button_text" varchar DEFAULT 'Bizimle İletişime Geçin',
  	"button_link" varchar DEFAULT '/iletisim',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_grid_section_block_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_services_blocks_grid_section_block_values_icon"
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_grid_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Misyonumuz ve Değerlerimiz',
  	"description" varchar DEFAULT '25 yıldır değişmeyen ilkelerimiz ve kalite standartlarımız ile hizmetinizdeyiz.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_faq_block_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sıkça Sorulan Sorular',
  	"subtitle" varchar DEFAULT 'Hizmetlerimiz hakkında merak edilenler.',
  	"variant" "enum_services_blocks_faq_block_variant" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_testimonials_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Müşterilerimiz Ne Diyor?',
  	"description" varchar DEFAULT 'Memnun müşterilerimizin yorumları bizim için en büyük motivasyon.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_service_description_block_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_service_description_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_service_description_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"icon" "enum_services_icon",
  	"description" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"featured_image_id" integer,
  	"related_category_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"testimonials_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Sorununuz için Bize Ulaşın',
  	"description" varchar DEFAULT 'Her türlü tamirat, tadilat ve teknik destek ihtiyacınız için 7/24 hizmetinizdeyiz.',
  	"button_text" varchar DEFAULT 'Bizimle İletişime Geçin',
  	"button_link" varchar DEFAULT '/iletisim',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_grid_section_block_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__services_v_blocks_grid_section_block_values_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_grid_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Misyonumuz ve Değerlerimiz',
  	"description" varchar DEFAULT '25 yıldır değişmeyen ilkelerimiz ve kalite standartlarımız ile hizmetinizdeyiz.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_faq_block_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sıkça Sorulan Sorular',
  	"subtitle" varchar DEFAULT 'Hizmetlerimiz hakkında merak edilenler.',
  	"variant" "enum__services_v_blocks_faq_block_variant" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_testimonials_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Müşterilerimiz Ne Diyor?',
  	"description" varchar DEFAULT 'Memnun müşterilerimizin yorumları bizim için en büyük motivasyon.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_service_description_block_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_service_description_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_service_description_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_icon" "enum__services_v_version_icon",
  	"version_description" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_featured_image_id" integer,
  	"version_related_category_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"testimonials_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "service_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_service_categories_icon",
  	"content" jsonb,
  	"featured_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_service_categories_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_service_categories_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_icon" "enum__service_categories_v_version_icon",
  	"version_content" jsonb,
  	"version_featured_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__service_categories_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"solution" jsonb,
  	"before_image_id" integer,
  	"after_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"profession" varchar,
  	"photo_id" integer,
  	"content" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"post_category_id" integer,
  	"related_service_category_id" integer,
  	"author_id" integer,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_post_category_id" integer,
  	"version_related_service_category_id" integer,
  	"version_author_id" integer,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "post_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"description" varchar,
  	"featured_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_post_categories_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_post_categories_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_featured_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__post_categories_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "authors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"email" varchar,
  	"bio" jsonb,
  	"photo_id" integer,
  	"title" varchar,
  	"social_linkedin" varchar,
  	"social_twitter" varchar,
  	"social_instagram" varchar,
  	"status" "enum_authors_status" DEFAULT 'active',
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_comments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"post_id" integer,
  	"parent_id" integer,
  	"commenter_name" varchar,
  	"commenter_email" varchar,
  	"content" varchar,
  	"status" "enum_blog_comments_status" DEFAULT 'pending',
  	"moderation_notes" varchar,
  	"is_notified" boolean DEFAULT false,
  	"ip_address" varchar,
  	"user_agent" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"service_categories_id" integer,
  	"projects_id" integer,
  	"testimonials_id" integer,
  	"posts_id" integer,
  	"post_categories_id" integer,
  	"authors_id" integer,
  	"blog_comments_id" integer,
  	"users_id" integer,
  	"media_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"company_name" varchar,
  	"company_description" varchar,
  	"logo_id" integer,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address" varchar,
  	"contact_google_maps_url" varchar,
  	"social_facebook" varchar,
  	"social_instagram" varchar,
  	"copyright" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "site_settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"service_categories_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_hero_section_heading_rotation" ADD CONSTRAINT "pages_blocks_home_hero_section_heading_rotation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_home_hero_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_hero_section" ADD CONSTRAINT "pages_blocks_home_hero_section_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_hero_section" ADD CONSTRAINT "pages_blocks_home_hero_section_images_secondary_image_id_media_id_fk" FOREIGN KEY ("images_secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_hero_section" ADD CONSTRAINT "pages_blocks_home_hero_section_cta_form_id_forms_id_fk" FOREIGN KEY ("cta_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_hero_section" ADD CONSTRAINT "pages_blocks_home_hero_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_services_carousel" ADD CONSTRAINT "pages_blocks_services_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_section_certificates" ADD CONSTRAINT "pages_blocks_about_section_certificates_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_section_certificates" ADD CONSTRAINT "pages_blocks_about_section_certificates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_section" ADD CONSTRAINT "pages_blocks_about_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_why_choose_us_features" ADD CONSTRAINT "pages_blocks_why_choose_us_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_choose_us"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_why_choose_us" ADD CONSTRAINT "pages_blocks_why_choose_us_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_why_choose_us" ADD CONSTRAINT "pages_blocks_why_choose_us_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_work_process_process_steps_steps" ADD CONSTRAINT "pages_blocks_work_process_process_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_work_process_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_work_process_process_steps" ADD CONSTRAINT "pages_blocks_work_process_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_work_process"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_work_process" ADD CONSTRAINT "pages_blocks_work_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_portfolio_section" ADD CONSTRAINT "pages_blocks_portfolio_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_testimonials_section" ADD CONSTRAINT "pages_blocks_testimonials_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_section" ADD CONSTRAINT "pages_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_page_hero_block" ADD CONSTRAINT "pages_blocks_page_hero_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_page_hero_block" ADD CONSTRAINT "pages_blocks_page_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_block" ADD CONSTRAINT "pages_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_grid_section_block_values" ADD CONSTRAINT "pages_blocks_grid_section_block_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_grid_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_grid_section_block" ADD CONSTRAINT "pages_blocks_grid_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_certifications_block_certificates" ADD CONSTRAINT "pages_blocks_certifications_block_certificates_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_certifications_block_certificates" ADD CONSTRAINT "pages_blocks_certifications_block_certificates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_certifications_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_certifications_block" ADD CONSTRAINT "pages_blocks_certifications_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_gallery_block_images" ADD CONSTRAINT "pages_blocks_image_gallery_block_images_src_id_media_id_fk" FOREIGN KEY ("src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_gallery_block_images" ADD CONSTRAINT "pages_blocks_image_gallery_block_images_category_id_service_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_gallery_block_images" ADD CONSTRAINT "pages_blocks_image_gallery_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_gallery_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_gallery_block" ADD CONSTRAINT "pages_blocks_image_gallery_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block_faqs" ADD CONSTRAINT "pages_blocks_faq_block_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rich_text_block" ADD CONSTRAINT "pages_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_projects_block" ADD CONSTRAINT "pages_blocks_projects_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_testimonials_block" ADD CONSTRAINT "pages_blocks_testimonials_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_service_categories_fk" FOREIGN KEY ("service_categories_id") REFERENCES "public"."service_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_hero_section_heading_rotation" ADD CONSTRAINT "_pages_v_blocks_home_hero_section_heading_rotation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_home_hero_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_hero_section" ADD CONSTRAINT "_pages_v_blocks_home_hero_section_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_hero_section" ADD CONSTRAINT "_pages_v_blocks_home_hero_section_images_secondary_image_id_media_id_fk" FOREIGN KEY ("images_secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_hero_section" ADD CONSTRAINT "_pages_v_blocks_home_hero_section_cta_form_id_forms_id_fk" FOREIGN KEY ("cta_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_hero_section" ADD CONSTRAINT "_pages_v_blocks_home_hero_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_services_carousel" ADD CONSTRAINT "_pages_v_blocks_services_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_section_certificates" ADD CONSTRAINT "_pages_v_blocks_about_section_certificates_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_section_certificates" ADD CONSTRAINT "_pages_v_blocks_about_section_certificates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_section" ADD CONSTRAINT "_pages_v_blocks_about_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_why_choose_us_features" ADD CONSTRAINT "_pages_v_blocks_why_choose_us_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_why_choose_us"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_why_choose_us" ADD CONSTRAINT "_pages_v_blocks_why_choose_us_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_why_choose_us" ADD CONSTRAINT "_pages_v_blocks_why_choose_us_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_work_process_process_steps_steps" ADD CONSTRAINT "_pages_v_blocks_work_process_process_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_work_process_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_work_process_process_steps" ADD CONSTRAINT "_pages_v_blocks_work_process_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_work_process"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_work_process" ADD CONSTRAINT "_pages_v_blocks_work_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_portfolio_section" ADD CONSTRAINT "_pages_v_blocks_portfolio_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_testimonials_section" ADD CONSTRAINT "_pages_v_blocks_testimonials_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blog_section" ADD CONSTRAINT "_pages_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_page_hero_block" ADD CONSTRAINT "_pages_v_blocks_page_hero_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_page_hero_block" ADD CONSTRAINT "_pages_v_blocks_page_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_block" ADD CONSTRAINT "_pages_v_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_grid_section_block_values" ADD CONSTRAINT "_pages_v_blocks_grid_section_block_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_grid_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_grid_section_block" ADD CONSTRAINT "_pages_v_blocks_grid_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_certifications_block_certificates" ADD CONSTRAINT "_pages_v_blocks_certifications_block_certificates_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_certifications_block_certificates" ADD CONSTRAINT "_pages_v_blocks_certifications_block_certificates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_certifications_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_certifications_block" ADD CONSTRAINT "_pages_v_blocks_certifications_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_gallery_block_images" ADD CONSTRAINT "_pages_v_blocks_image_gallery_block_images_src_id_media_id_fk" FOREIGN KEY ("src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_gallery_block_images" ADD CONSTRAINT "_pages_v_blocks_image_gallery_block_images_category_id_service_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_gallery_block_images" ADD CONSTRAINT "_pages_v_blocks_image_gallery_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_gallery_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_gallery_block" ADD CONSTRAINT "_pages_v_blocks_image_gallery_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block_faqs" ADD CONSTRAINT "_pages_v_blocks_faq_block_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_rich_text_block" ADD CONSTRAINT "_pages_v_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_projects_block" ADD CONSTRAINT "_pages_v_blocks_projects_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_testimonials_block" ADD CONSTRAINT "_pages_v_blocks_testimonials_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_service_categories_fk" FOREIGN KEY ("service_categories_id") REFERENCES "public"."service_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_rich_text_block" ADD CONSTRAINT "services_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_cta_block" ADD CONSTRAINT "services_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_grid_section_block_values" ADD CONSTRAINT "services_blocks_grid_section_block_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_grid_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_grid_section_block" ADD CONSTRAINT "services_blocks_grid_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_faq_block_faqs" ADD CONSTRAINT "services_blocks_faq_block_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_faq_block" ADD CONSTRAINT "services_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_testimonials_block" ADD CONSTRAINT "services_blocks_testimonials_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_service_description_block_features" ADD CONSTRAINT "services_blocks_service_description_block_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_description_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_service_description_block_images" ADD CONSTRAINT "services_blocks_service_description_block_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_service_description_block_images" ADD CONSTRAINT "services_blocks_service_description_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_description_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_blocks_service_description_block" ADD CONSTRAINT "services_blocks_service_description_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_related_category_id_service_categories_id_fk" FOREIGN KEY ("related_category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_rich_text_block" ADD CONSTRAINT "_services_v_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_cta_block" ADD CONSTRAINT "_services_v_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_grid_section_block_values" ADD CONSTRAINT "_services_v_blocks_grid_section_block_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_grid_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_grid_section_block" ADD CONSTRAINT "_services_v_blocks_grid_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_faq_block_faqs" ADD CONSTRAINT "_services_v_blocks_faq_block_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_faq_block" ADD CONSTRAINT "_services_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_testimonials_block" ADD CONSTRAINT "_services_v_blocks_testimonials_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_service_description_block_features" ADD CONSTRAINT "_services_v_blocks_service_description_block_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_description_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_service_description_block_images" ADD CONSTRAINT "_services_v_blocks_service_description_block_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_service_description_block_images" ADD CONSTRAINT "_services_v_blocks_service_description_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_description_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_service_description_block" ADD CONSTRAINT "_services_v_blocks_service_description_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_related_category_id_service_categories_id_fk" FOREIGN KEY ("version_related_category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "service_categories" ADD CONSTRAINT "service_categories_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_service_categories_v" ADD CONSTRAINT "_service_categories_v_parent_id_service_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_service_categories_v" ADD CONSTRAINT "_service_categories_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_before_image_id_media_id_fk" FOREIGN KEY ("before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_after_image_id_media_id_fk" FOREIGN KEY ("after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_post_category_id_post_categories_id_fk" FOREIGN KEY ("post_category_id") REFERENCES "public"."post_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_related_service_category_id_service_categories_id_fk" FOREIGN KEY ("related_service_category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_authors_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_post_category_id_post_categories_id_fk" FOREIGN KEY ("version_post_category_id") REFERENCES "public"."post_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_related_service_category_id_service_categories_id_fk" FOREIGN KEY ("version_related_service_category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_author_id_authors_id_fk" FOREIGN KEY ("version_author_id") REFERENCES "public"."authors"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_categories" ADD CONSTRAINT "post_categories_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_categories_v" ADD CONSTRAINT "_post_categories_v_parent_id_post_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."post_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_categories_v" ADD CONSTRAINT "_post_categories_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "authors" ADD CONSTRAINT "authors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_comments" ADD CONSTRAINT "blog_comments_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_comments" ADD CONSTRAINT "blog_comments_parent_id_blog_comments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_comments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_categories_fk" FOREIGN KEY ("service_categories_id") REFERENCES "public"."service_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_post_categories_fk" FOREIGN KEY ("post_categories_id") REFERENCES "public"."post_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_comments_fk" FOREIGN KEY ("blog_comments_id") REFERENCES "public"."blog_comments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_service_categories_fk" FOREIGN KEY ("service_categories_id") REFERENCES "public"."service_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_heading_rotation_order_idx" ON "pages_blocks_home_hero_section_heading_rotation" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_heading_rotation_parent_id_idx" ON "pages_blocks_home_hero_section_heading_rotation" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_order_idx" ON "pages_blocks_home_hero_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_parent_id_idx" ON "pages_blocks_home_hero_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_path_idx" ON "pages_blocks_home_hero_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_images_images_main_image_idx" ON "pages_blocks_home_hero_section" USING btree ("images_main_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_images_images_secondary_image_idx" ON "pages_blocks_home_hero_section" USING btree ("images_secondary_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_hero_section_cta_form_idx" ON "pages_blocks_home_hero_section" USING btree ("cta_form_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_carousel_order_idx" ON "pages_blocks_services_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_carousel_parent_id_idx" ON "pages_blocks_services_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_carousel_path_idx" ON "pages_blocks_services_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_certificates_order_idx" ON "pages_blocks_about_section_certificates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_certificates_parent_id_idx" ON "pages_blocks_about_section_certificates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_certificates_image_idx" ON "pages_blocks_about_section_certificates" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_order_idx" ON "pages_blocks_about_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_parent_id_idx" ON "pages_blocks_about_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_path_idx" ON "pages_blocks_about_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_why_choose_us_features_order_idx" ON "pages_blocks_why_choose_us_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_why_choose_us_features_parent_id_idx" ON "pages_blocks_why_choose_us_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_why_choose_us_order_idx" ON "pages_blocks_why_choose_us" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_why_choose_us_parent_id_idx" ON "pages_blocks_why_choose_us" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_why_choose_us_path_idx" ON "pages_blocks_why_choose_us" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_why_choose_us_image_idx" ON "pages_blocks_why_choose_us" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_process_steps_steps_order_idx" ON "pages_blocks_work_process_process_steps_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_process_steps_steps_parent_id_idx" ON "pages_blocks_work_process_process_steps_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_process_steps_order_idx" ON "pages_blocks_work_process_process_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_process_steps_parent_id_idx" ON "pages_blocks_work_process_process_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_order_idx" ON "pages_blocks_work_process" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_parent_id_idx" ON "pages_blocks_work_process" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_process_path_idx" ON "pages_blocks_work_process" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_portfolio_section_order_idx" ON "pages_blocks_portfolio_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_portfolio_section_parent_id_idx" ON "pages_blocks_portfolio_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_portfolio_section_path_idx" ON "pages_blocks_portfolio_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonials_section_order_idx" ON "pages_blocks_testimonials_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonials_section_parent_id_idx" ON "pages_blocks_testimonials_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonials_section_path_idx" ON "pages_blocks_testimonials_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_order_idx" ON "pages_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_parent_id_idx" ON "pages_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_path_idx" ON "pages_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_hero_block_order_idx" ON "pages_blocks_page_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_hero_block_parent_id_idx" ON "pages_blocks_page_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_hero_block_path_idx" ON "pages_blocks_page_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_hero_block_image_idx" ON "pages_blocks_page_hero_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_order_idx" ON "pages_blocks_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_parent_id_idx" ON "pages_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_path_idx" ON "pages_blocks_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_section_block_values_order_idx" ON "pages_blocks_grid_section_block_values" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_section_block_values_parent_id_idx" ON "pages_blocks_grid_section_block_values" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_section_block_order_idx" ON "pages_blocks_grid_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_section_block_parent_id_idx" ON "pages_blocks_grid_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_grid_section_block_path_idx" ON "pages_blocks_grid_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_certifications_block_certificates_order_idx" ON "pages_blocks_certifications_block_certificates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_certifications_block_certificates_parent_id_idx" ON "pages_blocks_certifications_block_certificates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_certifications_block_certificates_image_idx" ON "pages_blocks_certifications_block_certificates" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_certifications_block_order_idx" ON "pages_blocks_certifications_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_certifications_block_parent_id_idx" ON "pages_blocks_certifications_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_certifications_block_path_idx" ON "pages_blocks_certifications_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_images_order_idx" ON "pages_blocks_image_gallery_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_images_parent_id_idx" ON "pages_blocks_image_gallery_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_images_src_idx" ON "pages_blocks_image_gallery_block_images" USING btree ("src_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_images_category_idx" ON "pages_blocks_image_gallery_block_images" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_order_idx" ON "pages_blocks_image_gallery_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_parent_id_idx" ON "pages_blocks_image_gallery_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_gallery_block_path_idx" ON "pages_blocks_image_gallery_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_faqs_order_idx" ON "pages_blocks_faq_block_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_faqs_parent_id_idx" ON "pages_blocks_faq_block_faqs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_order_idx" ON "pages_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_parent_id_idx" ON "pages_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_path_idx" ON "pages_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_block_order_idx" ON "pages_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_block_parent_id_idx" ON "pages_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_block_path_idx" ON "pages_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_block_order_idx" ON "pages_blocks_projects_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_block_parent_id_idx" ON "pages_blocks_projects_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_block_path_idx" ON "pages_blocks_projects_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonials_block_order_idx" ON "pages_blocks_testimonials_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonials_block_parent_id_idx" ON "pages_blocks_testimonials_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonials_block_path_idx" ON "pages_blocks_testimonials_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "pages_featured_image_idx" ON "pages" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_services_id_idx" ON "pages_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_service_categories_id_idx" ON "pages_rels" USING btree ("service_categories_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_testimonials_id_idx" ON "pages_rels" USING btree ("testimonials_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_heading_rotation_order_idx" ON "_pages_v_blocks_home_hero_section_heading_rotation" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_heading_rotation_parent_id_idx" ON "_pages_v_blocks_home_hero_section_heading_rotation" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_order_idx" ON "_pages_v_blocks_home_hero_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_parent_id_idx" ON "_pages_v_blocks_home_hero_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_path_idx" ON "_pages_v_blocks_home_hero_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_images_images_main_image_idx" ON "_pages_v_blocks_home_hero_section" USING btree ("images_main_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_images_images_secondary_image_idx" ON "_pages_v_blocks_home_hero_section" USING btree ("images_secondary_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_hero_section_cta_form_idx" ON "_pages_v_blocks_home_hero_section" USING btree ("cta_form_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_carousel_order_idx" ON "_pages_v_blocks_services_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_carousel_parent_id_idx" ON "_pages_v_blocks_services_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_carousel_path_idx" ON "_pages_v_blocks_services_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_certificates_order_idx" ON "_pages_v_blocks_about_section_certificates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_certificates_parent_id_idx" ON "_pages_v_blocks_about_section_certificates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_certificates_image_idx" ON "_pages_v_blocks_about_section_certificates" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_order_idx" ON "_pages_v_blocks_about_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_parent_id_idx" ON "_pages_v_blocks_about_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_path_idx" ON "_pages_v_blocks_about_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_why_choose_us_features_order_idx" ON "_pages_v_blocks_why_choose_us_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_why_choose_us_features_parent_id_idx" ON "_pages_v_blocks_why_choose_us_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_why_choose_us_order_idx" ON "_pages_v_blocks_why_choose_us" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_why_choose_us_parent_id_idx" ON "_pages_v_blocks_why_choose_us" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_why_choose_us_path_idx" ON "_pages_v_blocks_why_choose_us" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_why_choose_us_image_idx" ON "_pages_v_blocks_why_choose_us" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_process_steps_steps_order_idx" ON "_pages_v_blocks_work_process_process_steps_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_process_steps_steps_parent_id_idx" ON "_pages_v_blocks_work_process_process_steps_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_process_steps_order_idx" ON "_pages_v_blocks_work_process_process_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_process_steps_parent_id_idx" ON "_pages_v_blocks_work_process_process_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_order_idx" ON "_pages_v_blocks_work_process" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_parent_id_idx" ON "_pages_v_blocks_work_process" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_process_path_idx" ON "_pages_v_blocks_work_process" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_portfolio_section_order_idx" ON "_pages_v_blocks_portfolio_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_portfolio_section_parent_id_idx" ON "_pages_v_blocks_portfolio_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_portfolio_section_path_idx" ON "_pages_v_blocks_portfolio_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonials_section_order_idx" ON "_pages_v_blocks_testimonials_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonials_section_parent_id_idx" ON "_pages_v_blocks_testimonials_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonials_section_path_idx" ON "_pages_v_blocks_testimonials_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_order_idx" ON "_pages_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_parent_id_idx" ON "_pages_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_path_idx" ON "_pages_v_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_hero_block_order_idx" ON "_pages_v_blocks_page_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_hero_block_parent_id_idx" ON "_pages_v_blocks_page_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_hero_block_path_idx" ON "_pages_v_blocks_page_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_hero_block_image_idx" ON "_pages_v_blocks_page_hero_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_order_idx" ON "_pages_v_blocks_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_parent_id_idx" ON "_pages_v_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_path_idx" ON "_pages_v_blocks_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_section_block_values_order_idx" ON "_pages_v_blocks_grid_section_block_values" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_section_block_values_parent_id_idx" ON "_pages_v_blocks_grid_section_block_values" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_section_block_order_idx" ON "_pages_v_blocks_grid_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_section_block_parent_id_idx" ON "_pages_v_blocks_grid_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_grid_section_block_path_idx" ON "_pages_v_blocks_grid_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_certifications_block_certificates_order_idx" ON "_pages_v_blocks_certifications_block_certificates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_certifications_block_certificates_parent_id_idx" ON "_pages_v_blocks_certifications_block_certificates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_certifications_block_certificates_image_idx" ON "_pages_v_blocks_certifications_block_certificates" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_certifications_block_order_idx" ON "_pages_v_blocks_certifications_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_certifications_block_parent_id_idx" ON "_pages_v_blocks_certifications_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_certifications_block_path_idx" ON "_pages_v_blocks_certifications_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_images_order_idx" ON "_pages_v_blocks_image_gallery_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_images_parent_id_idx" ON "_pages_v_blocks_image_gallery_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_images_src_idx" ON "_pages_v_blocks_image_gallery_block_images" USING btree ("src_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_images_category_idx" ON "_pages_v_blocks_image_gallery_block_images" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_order_idx" ON "_pages_v_blocks_image_gallery_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_parent_id_idx" ON "_pages_v_blocks_image_gallery_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_gallery_block_path_idx" ON "_pages_v_blocks_image_gallery_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_faqs_order_idx" ON "_pages_v_blocks_faq_block_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_faqs_parent_id_idx" ON "_pages_v_blocks_faq_block_faqs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_order_idx" ON "_pages_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_parent_id_idx" ON "_pages_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_path_idx" ON "_pages_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_block_order_idx" ON "_pages_v_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_block_parent_id_idx" ON "_pages_v_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_block_path_idx" ON "_pages_v_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_projects_block_order_idx" ON "_pages_v_blocks_projects_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_projects_block_parent_id_idx" ON "_pages_v_blocks_projects_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_projects_block_path_idx" ON "_pages_v_blocks_projects_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonials_block_order_idx" ON "_pages_v_blocks_testimonials_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonials_block_parent_id_idx" ON "_pages_v_blocks_testimonials_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonials_block_path_idx" ON "_pages_v_blocks_testimonials_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_featured_image_idx" ON "_pages_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_services_id_idx" ON "_pages_v_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_service_categories_id_idx" ON "_pages_v_rels" USING btree ("service_categories_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_testimonials_id_idx" ON "_pages_v_rels" USING btree ("testimonials_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_rich_text_block_order_idx" ON "services_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_rich_text_block_parent_id_idx" ON "services_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_rich_text_block_path_idx" ON "services_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_cta_block_order_idx" ON "services_blocks_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_cta_block_parent_id_idx" ON "services_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_cta_block_path_idx" ON "services_blocks_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_grid_section_block_values_order_idx" ON "services_blocks_grid_section_block_values" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_grid_section_block_values_parent_id_idx" ON "services_blocks_grid_section_block_values" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_grid_section_block_order_idx" ON "services_blocks_grid_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_grid_section_block_parent_id_idx" ON "services_blocks_grid_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_grid_section_block_path_idx" ON "services_blocks_grid_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_faq_block_faqs_order_idx" ON "services_blocks_faq_block_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_faq_block_faqs_parent_id_idx" ON "services_blocks_faq_block_faqs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_faq_block_order_idx" ON "services_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_faq_block_parent_id_idx" ON "services_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_faq_block_path_idx" ON "services_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_testimonials_block_order_idx" ON "services_blocks_testimonials_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_testimonials_block_parent_id_idx" ON "services_blocks_testimonials_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_testimonials_block_path_idx" ON "services_blocks_testimonials_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_features_order_idx" ON "services_blocks_service_description_block_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_features_parent_id_idx" ON "services_blocks_service_description_block_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_images_order_idx" ON "services_blocks_service_description_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_images_parent_id_idx" ON "services_blocks_service_description_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_images_image_idx" ON "services_blocks_service_description_block_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_order_idx" ON "services_blocks_service_description_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_parent_id_idx" ON "services_blocks_service_description_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_service_description_block_path_idx" ON "services_blocks_service_description_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "services_featured_image_idx" ON "services" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "services_related_category_idx" ON "services" USING btree ("related_category_id");
  CREATE INDEX IF NOT EXISTS "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "services_rels_testimonials_id_idx" ON "services_rels" USING btree ("testimonials_id");
  CREATE INDEX IF NOT EXISTS "services_rels_projects_id_idx" ON "services_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_rich_text_block_order_idx" ON "_services_v_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_rich_text_block_parent_id_idx" ON "_services_v_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_rich_text_block_path_idx" ON "_services_v_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cta_block_order_idx" ON "_services_v_blocks_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cta_block_parent_id_idx" ON "_services_v_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cta_block_path_idx" ON "_services_v_blocks_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_grid_section_block_values_order_idx" ON "_services_v_blocks_grid_section_block_values" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_grid_section_block_values_parent_id_idx" ON "_services_v_blocks_grid_section_block_values" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_grid_section_block_order_idx" ON "_services_v_blocks_grid_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_grid_section_block_parent_id_idx" ON "_services_v_blocks_grid_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_grid_section_block_path_idx" ON "_services_v_blocks_grid_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_faq_block_faqs_order_idx" ON "_services_v_blocks_faq_block_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_faq_block_faqs_parent_id_idx" ON "_services_v_blocks_faq_block_faqs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_faq_block_order_idx" ON "_services_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_faq_block_parent_id_idx" ON "_services_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_faq_block_path_idx" ON "_services_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_testimonials_block_order_idx" ON "_services_v_blocks_testimonials_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_testimonials_block_parent_id_idx" ON "_services_v_blocks_testimonials_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_testimonials_block_path_idx" ON "_services_v_blocks_testimonials_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_features_order_idx" ON "_services_v_blocks_service_description_block_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_features_parent_id_idx" ON "_services_v_blocks_service_description_block_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_images_order_idx" ON "_services_v_blocks_service_description_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_images_parent_id_idx" ON "_services_v_blocks_service_description_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_images_image_idx" ON "_services_v_blocks_service_description_block_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_order_idx" ON "_services_v_blocks_service_description_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_parent_id_idx" ON "_services_v_blocks_service_description_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_service_description_block_path_idx" ON "_services_v_blocks_service_description_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_meta_version_meta_image_idx" ON "_services_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_featured_image_idx" ON "_services_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_related_category_idx" ON "_services_v" USING btree ("version_related_category_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_services_v_rels_testimonials_id_idx" ON "_services_v_rels" USING btree ("testimonials_id");
  CREATE INDEX IF NOT EXISTS "_services_v_rels_projects_id_idx" ON "_services_v_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "service_categories_featured_image_idx" ON "service_categories" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "service_categories_updated_at_idx" ON "service_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "service_categories_created_at_idx" ON "service_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "service_categories__status_idx" ON "service_categories" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_parent_idx" ON "_service_categories_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_version_version_featured_image_idx" ON "_service_categories_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_version_version_updated_at_idx" ON "_service_categories_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_version_version_created_at_idx" ON "_service_categories_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_version_version__status_idx" ON "_service_categories_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_created_at_idx" ON "_service_categories_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_updated_at_idx" ON "_service_categories_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_latest_idx" ON "_service_categories_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_service_categories_v_autosave_idx" ON "_service_categories_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "projects_before_image_idx" ON "projects" USING btree ("before_image_id");
  CREATE INDEX IF NOT EXISTS "projects_after_image_idx" ON "projects" USING btree ("after_image_id");
  CREATE INDEX IF NOT EXISTS "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "testimonials_photo_idx" ON "testimonials" USING btree ("photo_id");
  CREATE INDEX IF NOT EXISTS "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "posts_featured_image_idx" ON "posts" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "posts_post_category_idx" ON "posts" USING btree ("post_category_id");
  CREATE INDEX IF NOT EXISTS "posts_related_service_category_idx" ON "posts" USING btree ("related_service_category_id");
  CREATE INDEX IF NOT EXISTS "posts_author_idx" ON "posts" USING btree ("author_id");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_featured_image_idx" ON "_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_post_category_idx" ON "_posts_v" USING btree ("version_post_category_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_related_service_category_idx" ON "_posts_v" USING btree ("version_related_service_category_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_author_idx" ON "_posts_v" USING btree ("version_author_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "post_categories_featured_image_idx" ON "post_categories" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "post_categories_updated_at_idx" ON "post_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "post_categories_created_at_idx" ON "post_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "post_categories__status_idx" ON "post_categories" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_parent_idx" ON "_post_categories_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_version_version_featured_image_idx" ON "_post_categories_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_version_version_updated_at_idx" ON "_post_categories_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_version_version_created_at_idx" ON "_post_categories_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_version_version__status_idx" ON "_post_categories_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_created_at_idx" ON "_post_categories_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_updated_at_idx" ON "_post_categories_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_latest_idx" ON "_post_categories_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_post_categories_v_autosave_idx" ON "_post_categories_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "authors_email_idx" ON "authors" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "authors_photo_idx" ON "authors" USING btree ("photo_id");
  CREATE INDEX IF NOT EXISTS "authors_updated_at_idx" ON "authors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "blog_comments_post_idx" ON "blog_comments" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "blog_comments_parent_idx" ON "blog_comments" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_comments_updated_at_idx" ON "blog_comments" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_comments_created_at_idx" ON "blog_comments" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_service_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("service_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_post_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("post_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_authors_id_idx" ON "payload_locked_documents_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_comments_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_comments_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "site_settings_rels_order_idx" ON "site_settings_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "site_settings_rels_parent_idx" ON "site_settings_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "site_settings_rels_path_idx" ON "site_settings_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "site_settings_rels_pages_id_idx" ON "site_settings_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "site_settings_rels_services_id_idx" ON "site_settings_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "site_settings_rels_service_categories_id_idx" ON "site_settings_rels" USING btree ("service_categories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_home_hero_section_heading_rotation" CASCADE;
  DROP TABLE "pages_blocks_home_hero_section" CASCADE;
  DROP TABLE "pages_blocks_services_carousel" CASCADE;
  DROP TABLE "pages_blocks_about_section_certificates" CASCADE;
  DROP TABLE "pages_blocks_about_section" CASCADE;
  DROP TABLE "pages_blocks_why_choose_us_features" CASCADE;
  DROP TABLE "pages_blocks_why_choose_us" CASCADE;
  DROP TABLE "pages_blocks_work_process_process_steps_steps" CASCADE;
  DROP TABLE "pages_blocks_work_process_process_steps" CASCADE;
  DROP TABLE "pages_blocks_work_process" CASCADE;
  DROP TABLE "pages_blocks_portfolio_section" CASCADE;
  DROP TABLE "pages_blocks_testimonials_section" CASCADE;
  DROP TABLE "pages_blocks_blog_section" CASCADE;
  DROP TABLE "pages_blocks_page_hero_block" CASCADE;
  DROP TABLE "pages_blocks_cta_block" CASCADE;
  DROP TABLE "pages_blocks_grid_section_block_values" CASCADE;
  DROP TABLE "pages_blocks_grid_section_block" CASCADE;
  DROP TABLE "pages_blocks_certifications_block_certificates" CASCADE;
  DROP TABLE "pages_blocks_certifications_block" CASCADE;
  DROP TABLE "pages_blocks_image_gallery_block_images" CASCADE;
  DROP TABLE "pages_blocks_image_gallery_block" CASCADE;
  DROP TABLE "pages_blocks_faq_block_faqs" CASCADE;
  DROP TABLE "pages_blocks_faq_block" CASCADE;
  DROP TABLE "pages_blocks_rich_text_block" CASCADE;
  DROP TABLE "pages_blocks_projects_block" CASCADE;
  DROP TABLE "pages_blocks_testimonials_block" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_home_hero_section_heading_rotation" CASCADE;
  DROP TABLE "_pages_v_blocks_home_hero_section" CASCADE;
  DROP TABLE "_pages_v_blocks_services_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_about_section_certificates" CASCADE;
  DROP TABLE "_pages_v_blocks_about_section" CASCADE;
  DROP TABLE "_pages_v_blocks_why_choose_us_features" CASCADE;
  DROP TABLE "_pages_v_blocks_why_choose_us" CASCADE;
  DROP TABLE "_pages_v_blocks_work_process_process_steps_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_work_process_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_work_process" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_section" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_section" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_section" CASCADE;
  DROP TABLE "_pages_v_blocks_page_hero_block" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_block" CASCADE;
  DROP TABLE "_pages_v_blocks_grid_section_block_values" CASCADE;
  DROP TABLE "_pages_v_blocks_grid_section_block" CASCADE;
  DROP TABLE "_pages_v_blocks_certifications_block_certificates" CASCADE;
  DROP TABLE "_pages_v_blocks_certifications_block" CASCADE;
  DROP TABLE "_pages_v_blocks_image_gallery_block_images" CASCADE;
  DROP TABLE "_pages_v_blocks_image_gallery_block" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_block_faqs" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_block" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text_block" CASCADE;
  DROP TABLE "_pages_v_blocks_projects_block" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_block" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "services_blocks_rich_text_block" CASCADE;
  DROP TABLE "services_blocks_cta_block" CASCADE;
  DROP TABLE "services_blocks_grid_section_block_values" CASCADE;
  DROP TABLE "services_blocks_grid_section_block" CASCADE;
  DROP TABLE "services_blocks_faq_block_faqs" CASCADE;
  DROP TABLE "services_blocks_faq_block" CASCADE;
  DROP TABLE "services_blocks_testimonials_block" CASCADE;
  DROP TABLE "services_blocks_service_description_block_features" CASCADE;
  DROP TABLE "services_blocks_service_description_block_images" CASCADE;
  DROP TABLE "services_blocks_service_description_block" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v_blocks_rich_text_block" CASCADE;
  DROP TABLE "_services_v_blocks_cta_block" CASCADE;
  DROP TABLE "_services_v_blocks_grid_section_block_values" CASCADE;
  DROP TABLE "_services_v_blocks_grid_section_block" CASCADE;
  DROP TABLE "_services_v_blocks_faq_block_faqs" CASCADE;
  DROP TABLE "_services_v_blocks_faq_block" CASCADE;
  DROP TABLE "_services_v_blocks_testimonials_block" CASCADE;
  DROP TABLE "_services_v_blocks_service_description_block_features" CASCADE;
  DROP TABLE "_services_v_blocks_service_description_block_images" CASCADE;
  DROP TABLE "_services_v_blocks_service_description_block" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "service_categories" CASCADE;
  DROP TABLE "_service_categories_v" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "post_categories" CASCADE;
  DROP TABLE "_post_categories_v" CASCADE;
  DROP TABLE "authors" CASCADE;
  DROP TABLE "blog_comments" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_rels" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_why_choose_us_features_icon";
  DROP TYPE "public"."enum_pages_blocks_page_hero_block_impact";
  DROP TYPE "public"."enum_pages_blocks_grid_section_block_values_icon";
  DROP TYPE "public"."enum_pages_blocks_faq_block_variant";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_why_choose_us_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_page_hero_block_impact";
  DROP TYPE "public"."enum__pages_v_blocks_grid_section_block_values_icon";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_variant";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_services_blocks_grid_section_block_values_icon";
  DROP TYPE "public"."enum_services_blocks_faq_block_variant";
  DROP TYPE "public"."enum_services_icon";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_blocks_grid_section_block_values_icon";
  DROP TYPE "public"."enum__services_v_blocks_faq_block_variant";
  DROP TYPE "public"."enum__services_v_version_icon";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_service_categories_icon";
  DROP TYPE "public"."enum_service_categories_status";
  DROP TYPE "public"."enum__service_categories_v_version_icon";
  DROP TYPE "public"."enum__service_categories_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_post_categories_status";
  DROP TYPE "public"."enum__post_categories_v_version_status";
  DROP TYPE "public"."enum_authors_status";
  DROP TYPE "public"."enum_blog_comments_status";
  DROP TYPE "public"."enum_forms_confirmation_type";`)
}
