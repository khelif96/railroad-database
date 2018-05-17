DELETE FROM passengers;

insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(1,"Toney","Bode","Destin_Murray@hotmail.com","pbkdf2:sha256:50000$AtTcBIpt$cf57286973d455fcc88f3fe4d0e50e58886ad4d2eafd1fe1585cb5a9bf93c8e8","1877350172123759","199 August Locks, Kulasland, MO, 55636");
insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(2,"Santa","Runolfsson","Titus.Larson@gmail.com","pbkdf2:sha256:50000$NxYAgISl$95bbd335d769abfc8575a8653aa6141b7f37614861a7a5044c898f06e8be1511","7875710503167178","277 Damaris Pine, New Edtown, TN, 57814-3806");
insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(3,"Meggie","Kessler","Jared.Fisher@yahoo.com","pbkdf2:sha256:50000$n75W1Kle$68bbdcdbd1493e2e3105447fe25323b4aecfbddf37108ff021b2d02da755aaa7","8629818299344484","981 Treutel Ranch, Lurafurt, RI, 25363-4827");
insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(4,"Nora","Mueller","Andy_Morissette@gmail.com","pbkdf2:sha256:50000$Uj7k1xDv$bf39e5ce02d8f46f9e5aa31d8058c91ea19d7d8239cb5c6ffefe64495d0ddc1a","5409810587723073","339 Considine Parks, Simonisside, CO, 76146");
insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(5,"Travis","Bernhard","Dale.Herman@hotmail.com","pbkdf2:sha256:50000$8KYCRCMs$290ab7f57b4ae25d54400a912f58d3d3cf4b24f8ee7a3bb78994ee37e1c1e73e","7354170072172444","697 Amber Haven, South Shanny, NM, 40307");
insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(6,"Dayne","Herman","Kristopher27@gmail.com","pbkdf2:sha256:50000$LoevdK6t$f9afd332f777c24d65143ccacaf0341f40ff3eb8dcd322bcc8d21ba17c126996","8529398445304419","4156 Major Extensions, Port Linwood, VA, 74248-3694");
insert into passengers(passenger_id,fname,lname,email,password,preferred_card_number,preferred_billing_address) values(7,"Sabina","Baumbach","Madison_Macejkovic52@gmail.com","pbkdf2:sha256:50000$fxaQ3Y2Y$f72973a82025f9f24940254ff880538e01707d21ee3702dc873dff813fe37909","7139810856116347","806 Eulalia Drive, Port Aurelioview, NM, 88537");

DELETE FROM stations;

insert into stations(station_id,station_name,station_symbol) values(1,"Boston, MA - South Station","BOS");
insert into stations(station_id,station_name,station_symbol) values(2,"Boston, MA - Back Bay Station","BBY");
insert into stations(station_id,station_name,station_symbol) values(3,"Route 128, MA","RTE");
insert into stations(station_id,station_name,station_symbol) values(4,"Providence, RI","PVD");
insert into stations(station_id,station_name,station_symbol) values(5,"Kingston, RI","KIN");
insert into stations(station_id,station_name,station_symbol) values(6,"Westerly,RI","WLY");
insert into stations(station_id,station_name,station_symbol) values(7,"Mystic, CT","MYS");
insert into stations(station_id,station_name,station_symbol) values(8,"New London, CT","NLC");
insert into stations(station_id,station_name,station_symbol) values(9,"Old Saybrook, CT","OSB");
insert into stations(station_id,station_name,station_symbol) values(10,"New Haven, CT","NHV");
insert into stations(station_id,station_name,station_symbol) values(11,"Bridgeport, CT","BRP");
insert into stations(station_id,station_name,station_symbol) values(12,"Stamford, CT","STM");
insert into stations(station_id,station_name,station_symbol) values(13,"New Rochelle, NY","NRO");
insert into stations(station_id,station_name,station_symbol) values(14,"New York, NY - Penn Station","NYP");
insert into stations(station_id,station_name,station_symbol) values(15,"Newark, NJ","NWK");
insert into stations(station_id,station_name,station_symbol) values(16,"Newark Liberty Intl. Air., NJ","EWR");
insert into stations(station_id,station_name,station_symbol) values(17,"Metro Park, NJ","MET");
insert into stations(station_id,station_name,station_symbol) values(18,"Trenton, NJ","TRE");
insert into stations(station_id,station_name,station_symbol) values(19,"Philadelphia, PA - 30th Street Station","PHL");
insert into stations(station_id,station_name,station_symbol) values(20,"Wilmington, DE - J.R. Biden, Jr. Station","WIL");
insert into stations(station_id,station_name,station_symbol) values(21,"Aberdeen, MD","ABE");
insert into stations(station_id,station_name,station_symbol) values(22,"Baltimore, MD - Penn Station","BAL");
insert into stations(station_id,station_name,station_symbol) values(23,"BWI Marshall Airport, MD","BWI");
insert into stations(station_id,station_name,station_symbol) values(24,"New Carrollton, MD","NCR");
insert into stations(station_id,station_name,station_symbol) values(25,"Washington, DC - Union Station","WAS");

DELETE FROM segments;

insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(1,1,2,2.82);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(2,2,3,4.7);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(3,3,4,11.75);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(4,4,5,9.87);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(5,5,6,6.11);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(6,6,7,5.17);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(7,7,8,7.05);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(8,8,9,8.93);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(9,9,10,15.51);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(10,10,11,10.34);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(11,11,12,12.69);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(12,12,13,9.87);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(13,13,14,13.63);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(14,14,15,7.99);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(15,15,16,2.35);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(16,16,17,6.11);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(17,17,18,10.81);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(18,18,19,12.69);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(19,19,20,9.87);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(20,20,21,12.69);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(21,21,22,11.75);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(22,22,23,6.11);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(23,23,24,6.58);
insert into segments(segment_id,seg_n_end,seg_s_end,seg_fare) values(24,24,25,7.05);

DELETE FROM trains;

insert into trains(train_id,train_start,train_end,train_direction,train_days) values(1,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(2,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(3,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(4,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(5,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(6,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(7,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(8,1,25,0,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(9,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(10,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(11,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(12,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(13,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(14,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(15,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(16,1,25,1,1);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(17,1,25,0,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(18,1,25,0,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(19,1,25,0,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(20,1,25,0,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(21,1,25,0,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(22,1,25,0,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(23,1,25,1,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(24,1,25,1,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(25,1,25,1,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(26,1,25,1,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(27,1,25,1,0);
insert into trains(train_id,train_start,train_end,train_direction,train_days) values(28,1,25,1,0);




