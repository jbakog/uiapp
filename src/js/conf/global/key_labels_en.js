
var key_labels = {
'public':'Public',
'status':'Status',
'dc:contributor':'Contributor',
'dc:contributor:advisor':'Advisor',
//'dc:contributor:author':'Author',
'dc:contributor:author':'Author',//'Συγγραφέας',
//'dc:contributor:editor':'Συντάκτης',
'dc:contributor:illustrator':'Illustrator',
'dc:contributor:other':'Contributor other',
'ea:relation:other':'Relation other',
'ea:contributor:editor':'Editor',// 'Επιμελητής',
'ea:contributor:responsible':'Responsible',//'Υπεύθυνος έκδοσης',
'ea:contributor:translator':'Translator',//'Μεταφραστής',
'dc:description:abstract':'abstract',
'dc:description:':'description',
'dc:identifier:isbn':'isbn',
'dc:identifier:issn':'issn',
'dc:language:iso':'Language',
'dc:publisher:':'publisher',
'dc:subject:': 'subjects',
'dc:title:':'name',
'dc:title:':'title',
'ea:collection:name':'collection name',
'ea:collection:place':'collection place',
'ea:comment:':'comment',
'comment':'comment',
'ea:comment:internal':'internal comment',
'ea:contributor-type:':'type',
'ea:date:end':'date end',
'ea:date:orgissued':'publication date',//'ημ/νια εκδοσης',
'ea:date:start':'date start',
'ea:issue:':'Issue',
'issue':'Issue',
'ea:marc:dates':'dates',
'ea:obj-type:':'type',
'ea:origin:comment':'Origin',
'ea:person:name-titles':'titles & other',
'ea:publication:place':'publication place',
'ea:size:pages':'Number of Pages',
'ea:status:comment':'status',
'ea:status:':'status',
'ea:subtitle:':'subtitle',
'ea:title:uniform':'title uniform',
'ea:url:origin': 'url source',
'ea:url:related': 'url',
'ea:url:related':'url related',
'ea:website:url-base':'site url-base',
'ea:website:url':'site url',
'ea:work:':'title',
'tmp:comment:':'comment',
'tmp:description:':'description',
'ea:call_number:ddc':'DDC',
'ea:dimensions:extent':'extent',
'ea:dimensions:dimensions':'dimensions',
'ea:dimensions:other-psysical-datails':'other-psysical-datails',
'ea:country:name':'country',
'ea:country:iso':'country iso',
'ea:linkeddata:url':'linked data url',
'ea:date:insert':'insert date',
'ea:publication:printer-name':'printer',
'ea:publication:printing-place':'Printing Place',
'ea:issue-of:':'issue of',
'ea:relation:other':'relation-other',
'ea:item-of:':'item of',
'ea:dating:':'Χρονολόγηση',
'ea:inventory:id':'Αριθμός',
'ea:material:type':'Ύλη',
'ea:bookbinding:type':'Bιβλιοδεσία',
'ea:content:transcription':'Μεταγραφή',
'ea:manuscript:source':'Χειρόγραφο',
'ea:situation:':'Κατάσταση',
'ea:material:':'Yλικό',
'ea:process:':'Διαδικασία',
'ea:symbol:':'Σύμβoλο',
'ea:instrument:':'Όργανο',
'marc:contributor:scribe' : 'κωδικογράφος',
'marc:contributor:collector':'Συλλέκτης',
'marc:contributor:conservator':'Συντηρητής',
'marc:contributor:commentatorwt':'Σχολιαστής',
'marc:contributor:autographer':'Αutographer',
'marc:contributor:annotator':'Yπομνηματογράφος',
'marc:contributor:rubricator':'Rubricator',
'ea:owner:': 'Ιδιοκτήτης',
'ea:work:title':'title',
'status_field':'status',
'language':'language',

/*********** Auth_person **********/
'Person_fields':'Person Fields',
'Person_controls_fields':'Person - Control Fields',
'ea:auth:Person_Work_Header':'Person-Work Fields',
'ea:auth:Person_Header_Basic':'Person - Basic Fields',
'ea:auth:Person_Header_Additional':'Person - Additional Fields',
'ea:auth:Person_Header_Information':'Person - Information Fields',
'ea:auth:Person_Header_Link':'Person - Link ',
'ea:auth:Person_Header_Cataloging':'Person - Classification and Cataloging',
'ea:auth:Person_Header_Subjects':'Person - Subjects',
'ea:auth:Person_Header_Keywords':'Person - Keywords',
'ea:auth:Person_Header_Relations':'Person - Relations',
'ea:auth:Person_Entity_Language':'Language term',
'ea:auth:Person_Ind1':'Type of personal name',
'ea:authPerson:AttributesTitle':'Title of person',
'ea:authPersonAssociated:Place_Birth':'Birth place',
'ea:authPersonAssociated:Place_Death':'Death place',
'ea:auth:CountryName':'Associated Country',
'ea:auth:CountryName_assoc':'Associated Country',
'ea:authAssociated:Residence_Place':'Place of residence',
'ea:authAssociated:Residence_Place_Simple':'Place',
'ea:authAssociated:OtherPlace_Place':'Other place',
'ea:auth:Activity_Field':'Field of Activity',
'ea:authPerson:Group_Group':'Associated Group',
'ea:authPerson:Occupation_Name':'Occupation',
'ea:authPerson:Gender_Name':'Gender',
'ea:authAssociated:Language':'Associated Language',
'ea:auth:Nationality':'Nationality',
'ea:authPersonCoded:Dates_Birth':'Person Birth date',
'ea:authPersonCoded:Dates_Death':'Person Death date',
'ea:auth:NoteNonpublic':'Nonpublic General Note',
'ea:auth:NotePublic':'Public General Note',
'ea:authBiographical:Data_Text':'Biographical Data',
'ea:authElectronic:Location':'Electronic Location',
'ea:auth:Address_Address':'Address',
'ea:auth:Address_Address2':'Address',
'ea:auth:Address_City':'City',
'ea:auth:Address_Jurisdiction':'Intermediate jurisdiction',
'ea:auth:Address_Post':'Postal code',
'ea:auth:Address_Mail':'E-mail',
'authPersonSee':'Relation with not use terms (see)',
'ea:authPersonSee:Id':'Personal name (not use)',
'ea:auth:Person_Name':'Personal name',
'ea:auth:Person_Numeration':'Numeration',
'ea:auth:Person_TitlesAssociated':'Titles and other words associated',
'ea:auth:Person_DatesAssociated':'Dates associated with a name',
'ea:auth:Person_FullerName':'Fuller form of name',
'ea:auth:Person_FormSubdivision':'Form subdivision',
'ea:auth:Person_GeneralSubdivision':'General subdivision',
'ea:auth:Person_ChronoSubdivision':'Chronological subdivision',
'ea:auth:Person_GeographicSubdivision':'Geographic subdivision',
'ea:auth:personSee':'Name not use (See)',
'ea:auth:personΑlternativesNames':'Person alternatives names',
'ea:auth:personSeeAlso':'Αlternatives names Person (See Also)',
'ea:auth:personSeealsoPerson':'Relationship with other Person',
'ea:auth:personSeealsoOrganization':'Relationship with Organizations',
'ea:auth:personSeealsoFamily':'Relationship with Family (See Also)',
'ea:auth:personOtherlanguage':'Person in other language',
'ea:auth:Subject':'Subject',
'ea:auth:Keywords':'Keywords',
'ea:auth:Commission':'Commission',
'ea:auth:Citizenship':'Citizenship',
'ea:auth:Participation_in_events':'Participation in events',
'ea:authBiographical_Work:Data_Text':'Information Data',
'ea:auth:person_name_other_lang':'Person name in other language',


/*********** Auth_family **********/
'ea:auth:Family_Header_Fields':'Family Fields',
'ea:auth:Family_Header_Basic':'Family - Basic Fields',
'ea:auth:Family_Header_Control': 'Family - Control Fields',
'ea:auth:Family_Header_Additional':'Family - Additional Fields',
'ea:auth:Family_Header_Information':'Family- Information Fields',
'ea:auth:Family_Header_Link':'Family - Link ',
'ea:auth:Family_Header_Cataloging':'Family - Classification and Cataloging',
'ea:auth:Family_Header_Subjects':'Family - Subjects',
'ea:auth:Family_Header_Keywords':'Family - Keywords',
'ea:auth:Family_Header_Relations':'Family - Relations',
'ea:auth:Family_Ind1':'Type of personal name',
'ea:auth:Family_Titles_Place':'Places associated with the family',
'ea:auth:Family_Type':'Type of family',
'ea:auth:family_DatesAssociated':'Dates associated with a family',
'authFamily':'Family name',
'ea:auth:FamilyCodedDates_StartPeriod':'Family Start period',
'ea:auth:FamilyCodedDates_EndPeriod':'Family End period',
'authFamilyInformation':'Family Information',
'ea:auth:FamilyInformation_Type':'Type of family',
'ea:auth:FamilyInformation_Member':'Name of prominent member',
'authFamilyInformation_StartPeriod':'Start period',
'authFamilyInformation_EndPeriod':'End period',
'ea:auth:Family_see_also':'Αlternatives names Family (See Also)',
'ea:auth:Family_see':'Αlternatives names Family',
'ea:auth:FamilySeeAlsoFamily':'Relationship with other Family',
'ea:auth:FamilySeealsoPerson':'Relationship with Person (See Also)',
'ea:auth:Family_Other_Language':'Family in other language',

/**********  Place  **************/
//'ea:place:Language':'Language Place',
//'ea:place:City':'City',
//'ea:place:Region':'Region',
//'ea:place:Country':'Country',
//'ea:place:See':'Other name  place (same language)',
//'placeLinkEntry':'Place in other Language',
//'ea:place:LinkEntryName':'Name place',
//'ea:place:LinkEntryLanguage':'Language translation',
'ea:auth:Place_Term':'Place term',
'ea:auth:Place_Type':'Place type',
'place_header_public': 'Place Fields',
'place_header_control': 'Place - Control Fields',
'ea:auth:Place_Header_Basic':'Place - Basic Fields',
'ea:auth:Place_Header_Additional':'Place - Additional Fields',
'ea:auth:Place_Header_Information':'Place- Information Fields',
'ea:auth:Place_Header_Link':'Place - Link ',
'ea:auth:Place_Header_Cataloging':'Place - Classification and Cataloging',
'ea:auth:Place_Header_Subjects':'Place - Subjects',
'ea:auth:Place_Header_Relations':'Place - Relations',
'ea:auth:PlaceSee':'Name  not use (See)',
'ea:auth:Place_See_Also':'Αlternatives names Place (See Also)',
'ea:auth:Relation_Place_Place':'Relationship with other term',
'ea:auth:Place_See_Also':'Αlternatives names Place (See Also)',
'ea:auth:Place_Other_Language':'Place in other language',
'ea:auth:Place_not_use':'Name not use',
'ea:auth:Place_Αlternatives':'Αlternatives names Place',
'ea:auth:Place_Other':'Relationship with other Place',
'ea:auth:Place_Other_Language':'Place in other language',
'relation_place_organization':'Relationship with Organization',


/*********  Organization  ********/
'Header_Organization':'Organization Fields',
'ea:control:Header_Organization_Control':'Organization - Control Fields',
'ea:auth:Organization_Header_Basic':'Organization - Basic Fields',
'ea:auth:Organization_Header_Additional':'Organization - Additional Fields',
'ea:auth:Organization_Header_Information':'Organization- Information Fields',
'ea:auth:Organization_Header_Link':'Organization - Link ',
'ea:auth:Organization_Header_Cataloging':'Organization - Classification and Cataloging',
'ea:auth:Organization_Header_Subjects':'Organization - Subjects',
'ea:auth:Organization_Header_Keywords':'Organization - Keywords',
'ea:auth:Organization_Header_Relations':'Organization - Relations',
'ea:auth:Organization_Subdivision':'Subdivision',
'ea:auth:Organization_Addition':'Addition to name or qualifier',
'ea:auth:Organization_Number':'Number of meeting',
'ea:auth:Organization_Date':'Date of meeting',
'ea:auth:Organization_Location':'Location of meeting',
'ea:auth:Organization_Attributes_StartPeriod':'Start period',
'ea:auth:Organization_Attributes_EndPeriod':'End period',
'ea:auth:Organization_see_also':'Αlternatives names Organization',
'ea:auth:OrganizationSeeAlsoOrganization':'Relationship with other Organization',
'ea:auth:Relation_Organization_Family':'Relationship with Family',
'ea:auth:Relation_Organization_Person':'Relationship with Person',
'ea:auth:OrganizationSeealsoFamily':'Relationship with Family',
'authOrganization':'Organization',
'authOrganization_Name':'Organization name',
'ea:auth:Organization_Subordinate_Unit':'Subordinate unit',
'authOrganizationAttributes':'Type of corporate body',
'ea:auth:Organization_Attributes_Type':'Type',
'OrganizationCodedDates_Start_Period':'Organization Start period',
'OrganizationCodedDates_End_Period':'Organization End period',
'ea:auth:Organization_Ind1':'Type of organization',
'ea:auth:Organization_Other_Language':'Organization  in other language',
'organization_Activity_Field':'Organization category',
'ea:authAssociated:Residence_Place_Organization':'Organization headquarters',
'establish_place':'Establish place',
'authOrganization':'Organization',
'authOrganization_Name':'Organization Name',
'ea:auth:Organization_Reopening':'Reopening',
'ea:auth:Organization_Subordinate_Unit':'Subordinate unit',
'authOrganizationAttributes':'Type of organization',


/*********** Auth_Manifestation **********/
'ea:manif:editorVersion':'Version editor',
'ea:manif:authorPreface':'Preface author',
'ea:manif:admissionAuthor':'Admission Author',
'ea:manif:distributor':'Distributor',
'ea:manif:filmDistributor':'Film distributor',
'ea:manif:publisher':'Publisher',
'ea:manif:broadcaster':'Broadcaster',
'ea:manif:manufacturer':'Manufacturer',
'ea:manif:lithographer':'Lithographer',
'ea:manif:etcher':'Etcher',
'ea:manif:bookDesigner':'Book designer',
'ea:manif:printer':'Printer',
'ea:manif:engraver':'Engraver',
'ea:manif:brailleEmbosser':'Braille embosser',
'ea:manif:caster':'Caster',
'ea:manif:collotyper':'Collotyper',
'ea:manif:platemaker':'Platemaker',
'ea:manif:printmaker':'Printmaker',
'Header_Manifestation':'Manifestation Fields',
'Header_Manifestation_Control':'Manifestation - Control Fields',
'ea:manif:Header_Information':'Manifestation -  Information Fields',
'ea:auth:Manifestation_Header_Cataloging':'Manifestation - Cataloging Fields',
'ea:manif:Header_Work_Manifestation':'Work – Expression of Manifestation',
'ea:manif:Header_Digital_Item':'Digital Item',
'ea:manif:Header':'Manifestation',
'ea:manif:Header_Title':'Manifestation - Title Fields',
'ea:manif:Header_Basic':'Manifestation - Basic Fields',
'ea:manif:Header_Additional':'Manifestation - Additional Fields',
'ea:manif:Header_Work_Expression':'Work/Expression contained in Manifestation',
'ea:manif:Header_Contributors':'Manifestation - Contributors',
'ea:manif:Header_Subjects':'Manifestation - Keywords',
'ea:manif:Header_Relations':'Manifestation - Relations',
'ea:manif:Type':'Manifestation type',
'ea:manif:Title':'Title',
'ea:manif:Title_manif':'Manifestation title',
'ea:manif:Title_Proper':'Title proper',
'ea:manif:Title_Medium':'Medium',
'ea:manif:Title_Remainder':'Remainder of title',
'ea:manif:Title_Responsibility':'Statement of responsibility',
'ea:manif:Title_PartNumber':'Number of part/section',
'ea:manif:Title_PartName':'Name of part/section',
'ea:manif:Edition':'Edition',
'ea:manif:Edition_Statement':'Edition statement',
'ea:manif:Edition_Remainder':'Remainder of edition statement',
'ea:manif:AbbreviatedTitle':'Abbreviated title',
'ea:manif:KeyTitle':'Key title',
'ea:manif:Additional_Title':'Additional Title',
'ea:manif:Additional_Title_Display':'Display text',
'ea:manif:Additional_Title_Proper':'Title',
'ea:manif:Additional_Title_Remainder':'Remainder of title',
'ea:manif:Additional_Title_PartNumber':'Number of part/section',
'ea:manif:Additional_Title_PartName':'Name of part/section',
'ea:manif:publications':'Publications',
'ea:manif:Publication':'Publication',
'ea:manif:Publication_Place':'Place of publication',
'ea:manif:Publisher_Name':'Name of Publisher',
'ea:manif:Publication_Date':'Date of publication',
'ea:manif:Distribution':'Distribution',
'ea:manif:Distribution_Place':'Place of Distribution',
'ea:manif:Distribution_Name':'Name of distributor',
'ea:manif:Distribution_Date':'Date of distribution',
'ea:manif:Production':'Production',
'ea:manif:Production_Place':'Place of Production',
'ea:manif:Production_Name':'Name of producer',
'ea:manif:Production_Date':'Date of production',
'ea:manif:Manufactur':'Manufacture',
'ea:manif:Manufactur_Place':'Place of Manufacture',
'ea:manif:Manufactur_Name':'Name of manufacturer',
'ea:manif:Manufactur_Date':'Date of manufacture',
'ea:manif:Physical_Description':'Physical Description',
'ea:manif:Physical_Description_Extent':'Extent',
'ea:manif:Physical_Description_Details':'Other physical details',
'ea:manif:Physical_Description_Dimensions':'Dimensions',
'ea:manif:Physical_Description_Accompanying':'Accompanying material',
'ea:manif:Media_Type':'Media type',
'ea:manif:Carrier_Type':'Carrier type',
'ea:manif:Series':'Series',
'ea:manif:Series_Title':'Series Title',
'ea:manif:Series_Remainder':'Other Title Information',
'ea:manif:Series_Responsibility':'Statement of Responsibility',
'ea:manif:Series_Volume':'Volume Designation',
'ea:manif:Series_ISSN':'ISSN',
'ea:manif:isbn_issn_ismn':'ISBN,ISSN,ISMN',
'ea:manif:ISBN':'ISBN',
'ea:manif:ISBN_Terms':'Terms of availability',
'ea:manif:ISBN_Qualify':'Qualifying information',
'ea:manif:ISBN_Canceled':'Canceled/invalid ISBN',
'ea:manif:ISMN':'ISMN',
'ea:manif:ISMN_Terms':'Terms of availability',
'ea:manif:ISMN_Qualify':'Qualifying information',
'ea:manif:ISMN_Canceled':'Canceled/invalid ISBN',
'ea:manif:ISSN':'ISSN',
'ea:manif:ISSN_Cancelled':'Canceled ISSN',
'ea:manif:ISSN_Incorrect':'Incorrect ISSN',
'ea:manif:ISSN_LNumber':'Linking ISSN',
'ea:manif:ISSN_LCanceled':'Canceled Linking ISSN',
'ea:manif:note':'Notes',
'ea:manif:Serials_Numbering':'Serials numbering',
'ea:manif:Country_Code':'Country of Publishing/Producing',
'ea:manif:Subject':'Subject',
'ea:manif:Keywords':'Keywords',
'ea:manif:Work':'Work',
'ea:manif:Work_Expression':'Work/Expression ',
'ea:manif:Relation_Equivalent':'Equivalent relations',
'ea:manif:Relation_Descriptive':'Descriptive relations',
'ea:manif:Relation_Wholepart':'Whole-Part Relations',
'ea:manif:Accompanying':'Accompanying relations',
'ea:manif:availability_library':'Library availability',
'ea:manif:digital-item':'Digital item',






/*********  Work ********/
'work-expression':'Work – Expression',
'ea:work:Header':'Work',
'ea:work:Header_Control':'Work - Control Fields',
'ea:work:Header_Additional':'Work - Additional information',
'ea:work:Header_Link':'Work - Link information',
'ea:work:Header_Basic':'Work - Basic Fields',
'ea:work:Header_Information':'Work - Information Fields',
'ea:work:Header_Contributors':'Work - Contributors',
'ea:work:Header_Subjects':'Work - Subjects',
'ea:work:Header_Relation':'Work - Relation',
'status_work':'Work - Status',
'ea:work:Type':'Type Work',
'ea:work:Title_Preferred':'Title of Work',
'ea:work:Title_PartNumber':'Number of part/section',
'ea:work:Title_PartName':'Name of part/section',
'ea:work:Form':'Form of Work',
'ea:work:Date':'Date of Work',
'ea:work:Version':'Other distinguishing characteristics',
'ea:work:Language':'Original language of the Work',
'ea:work:Place':'Place of origin  Work',
'ea:work:chronological':'Chronological coverage',
'ea:work:geographical':'Geographical coverage',
'ea:work:subjectCategory':'Subject category',
'ea:work:noteNonpublic':'Nonpublic General Note',
'ea:work:notePublic':'Public General Note',
'ea:work:biographicalData_Text':'Biographical Data',
'ea:work:biographicalData_URL':'Related URL',
'ea:work:Relation_Descriptive':'Descriptive relations',
'ea:work:Relation_Derivative':'Derivative relations',
'ea:work:Relation_Wholepart':'Whole-Part Relations',
'ea:work:Relation_Accompanying':'Accompanying relations',
'ea:work:Relation_Sequential':'Sequential relations',
'ea:work:dedicateeWork':'Dedicatee',
'ea:work:landscapeArchitectWork':'Landscape architect',
'ea:work:architectWork':'Architect',
'ea:work:sculptorWork ':'Sculptor',
'ea:work:directorOfPhotographyWork':'Director of photography',
'ea:work:judgeWork':'Judge',
'ea:work:defendantWork':'Defendant',
'ea:work:plaintiffWork':'Plaintiff',
'ea:work:productionCompanyWork':'Production company',
'ea:work:inventorWork':'Inventor',
'ea:work:hostInstitutionWork':'Host institution',
'ea:work:degreeGrantingInstitutionWork':'Degree granting institution',
'ea:work:artistWork':'Artist',
'ea:work:filmmakerWork':'Filmmaker',
'ea:work:interviewerWork':'Interviewer',
'ea:work:librettistWork':'Librettist',
'ea:work:issuingBodyWork':'Issuing body',
'ea:work:sponsoringBodyWork':'Sponsoring body',
'ea:work:producerWork':'Producer',
'ea:work:filmProducerWork':'Film producer',
'ea:work:radioProducerWork':'Radio producer',
'ea:work:televisionProducerWork':'Television producer',
'ea:work:programmerWork':'Programmer',
'ea:work:screenwriterWork':'Screenwriter',
'ea:work:directorWork':'Director',
'ea:work:filmDirectorWork':'Film director',
'ea:work:radioDirectorWork':'Radio director',
'ea:work:televisionDirectorWork':'Television director',
'ea:work:lyricistWork':'Lyricist',
'ea:work:authorWork':'Author',
'ea:work:thesisAdvisor':'Thesis Advisor',
'ea:work:composerWork':'Composer',
'ea:work:compilerWork':'Compiler',
'ea:work:designerWork':'Designer',
'ea:work:honoureeWork':'Honouree',
'ea:work:photographerWork':'Photographer',
'ea:work:cartographerWork':'Cartographer',
'ea:work:choreographerWork':'Choreographer',
'ea:work:courtGovernedWork':'Court governed',
'ea:work:enactingJurisdictionWork':'Enacting jurisdiction',
'ea:work:jurisdictionGovernedWork':'Jurisdiction governed',
'ea:work:praesesWork':'Praeses',
'ea:work:respondentWork':'Respondent',

'Expressions_of_Work':'Available Expressions of Work',
'Manifestation_of_Work':'Manifestation of the original Work',
'ea:work:Header_Thumb':'Work - Thumbnail Information',

/*********  Expression ********/
'expression_header_public': 'Expression Fields',
'expression_header_Control':'Expression - Control Fields',
'status_expression':'Status',
'ea:expression:Header':'Expression',
'ea:expression:Header_Relation_Expression':'Expression- Relation',
'ea:expres:Header_Basic':'Expression - Basic Fields',
'ea:expres:Relation_Work':'Relation Expression-Work',
'ea:expres:Header_Specific':'Expression - Specific Fields',
'ea:expres:Header_Information':'Expression - Information Fields',
'ea:expres:Header_Contributors':'Expression - Contributors',
'ea:expres:Header_Subjects':'Expression - Subjects',
'ea:expres:title':'Τίτλος Expression',
'ea:expres:Form':'Form of expression',
'ea:expres:Content':'Content type Expression',
'ea:expres:Language':'Language',
'ea:expres:Dates':'Date of expression',
'ea:expres:Version':'Other distinguishing characteristics',
'ea:expres:Note_Content':'Contents',
'ea:expres:Note_Summary':'Summary',
'ea:expres:Note_Citation':'Citation, References, reviews',
'ea:expres:Note_Citation_Sourse':'Name of source',
'ea:expres:Frequency':'Frequency serial',
'ea:expres:Notated_Music':'Format of Notated Music',
'ea:expres:Computer_Character':'Computer File Characteristics',
'ea:expres:Playing_Time':'Playing time for sound, video etc.',
'ea:expres:Symbology':'Symbology tactile material',
'ea:expres:Scale':'Scale',
'ea:expres:Note_Citation_Url':'Terms of availability',
'ea:expres:Url':'URL',

/********* Concept Fields ********/

'concept_header_public': 'Concept Fields',
'ea:auth:Concept_Type':'Concept Type',
'ea:auth:Concept_Header_Control':'Concept - Control Fields',
'ea:auth:Concept_Term':'Concept term',
'ea:auth:Concept_Header_Basic':'Concept - Basic Fields',
'ea:auth:Concept_Header_Additional':'Concept - Additional Fields',
'ea:auth:Concept_Header_Information':'Concept- Information Fields',
'ea:auth:Concept_Header_Link':'Concept - Link ',
'ea:auth:Concept_Header_Cataloging':'Concept - Classification and Cataloging',
'ea:auth:Concept_Header_Subjects':'Concept - Subjects',
'ea:auth:Concept_Header_Relations':'Concept - Relations',
'ea:auth:conceptSee':'Name  not use',
'ea:auth:Concept_See_Also':'Αlternatives names Concept',
'ea:auth:Relation_Concept_Concept':'Relationship with other term',
'ea:auth:Concept_Other_Language':'Concept in other language',

/********* Obj_collection Fields ********/
'ea:auth:Obj_collection_Term':'Object Collection term',
'ea:auth:Obj_collection_Header_Basic':'Object Collection - Basic Fields',
'ea:auth:Obj_collection_Header_Additional':'Object Collection - Additional Fields',
'ea:auth:Obj_collection_Header_Information':'Object Collection- Information Fields',
'ea:auth:Obj_collection_Header_Link':'Object Collection - Link ',
'ea:auth:Obj_collection_Header_Cataloging':'Object Collection - Classification and Cataloging',
'ea:auth:Obj_collection_Header_Subjects':'Object Collection - Subjects',
'ea:auth:Obj_collection_Header_Relations':'Object Collection - Relations',

/********* Event Fields ********/
'event_header_public': 'Event Fields',
'ea:auth:Event_Type':'Event type',
'ea:auth:Event_Term':'Event term',
'ea:auth:Event_Header_Basic':'Event - Basic Fields',
'ea:auth:Event_Header_Control':'Event - Control Fields',
'ea:auth:Event_Header_Additional':'Event - Additional Fields',
'ea:auth:Event_Header_Information':'Event- Information Fields',
'ea:auth:Event_Start_Date':'Start date',
'ea:auth:Event_Expiry_Date':'Expiry date',
'ea:auth:Event_Place':'Place',
'ea:auth:Event_Involved':'Involved',
'ea:auth:Event_Header_Link':'Event - Link ',
'ea:auth:Event_Header_Cataloging':'Event - Classification and Cataloging',
'ea:auth:Event_Header_Relations':'Event - Relations',
'ea:auth:Event_Term':'Event term',
'ea:auth:Event_Other_Language':'Event in other language',
'ea:auth:Event_not_use':'Not use name',
'ea:auth:Event_See_Also':'Αlternatives names',

/********* Genre Fields ********/
'ea:auth:Genre_Term':'Genre term',
'genre_header_public': 'Genre Fields',
'ea:auth:Genre_Type': 'Genre type',
'ea:auth:Genre_Header_Control':'Genre - Control Fields',
'ea:auth:Genre_Header_Basic':'Genre - Basic Fields',
'ea:auth:Genre_Header_Additional':'Genre - Additional Fields',
'ea:auth:Genre_Header_Information':'Genre- Information Fields',
'ea:auth:Genre_Header_Link':'Genre - Link ',
'ea:auth:Genre_Header_Cataloging':'Genre - Classification and Cataloging',
'ea:auth:Genre_Header_Relations':'Genre - Relations',
'ea:auth:Genre_See_Also':'Αlternatives names',
'ea:auth:Genre_Other_Language':'Genre in other language',

/********* Object Fields ********/
'ea:auth:Object_Term':'Object term',
'ea:auth:Object_Type':'Object type',
'object_header_public': 'Object Fields',
'ea:auth:Object_Header_Control':'Object - Control Fields',
'ea:auth:Object_Header_Basic':'Object - Basic Fields',
'ea:auth:Object_Header_Additional':'Object - Additional Fields',
'ea:auth:Object_Header_Information':'Object- Information Fields',
'ea:auth:Object_Header_Link':'Object - Link ',
'ea:auth:Object_Header_Cataloging':'Object - Classification and Cataloging',
'ea:auth:Object_Header_Relations':'Object - Relations',
'ea:auth:Object_Term':'Object term',
'ea:auth:Object_See_Also':'Αlternatives names',
'ea:auth:Object_not_use':'Not use name',
'ea:auth:Object_Other_Language':'Object in other language',

/********* General Fields ********/
'general_header_public': 'General Fields',
'ea:auth:General_Term':'General term',
'ea:auth:General_Header_Control':'General - Control Fields',
'ea:auth:General_Header_Basic':'General - Basic Fields',
'ea:auth:General_Header_Additional':'General - Additional Fields',
'ea:auth:General_Header_Additional':'General - Additional Fields',
'ea:auth:General_Header_Information':'General- Information Fields',
'ea:auth:General_Header_Link':'General - Link',
'ea:auth:General_Header_Cataloging':'General - Classification and Cataloging',
'ea:auth:General_Header_Relations':'General - Relations',
'ea:auth:General_Term':'General term',
'ea:auth:General_Other_Language':'General in other language',
'ea:auth:General_not_use':'Name not use',

/********* Control Fields ********/
'ea:control:Header_Control':'CONTROL FIELDS',
'ea:control:Control_Number':'Control Number',
'ea:control:Latest_Transaction':'Latest transaction',
'ea:control:Persistent':'Persistent Record Identifier',
'ea:control:Entity_Type':'Entity Type',
'ea:control:Kind_Record':'Kind of record',
'ea:control:Level_Establish':'Establishment Level',

/********* Link Fields ********/
'ea:link:bibliography':'Bibliography',
'ea:link:bibliographyNumber':'Bibliography Number',
'ea:link:bibliographyInformation':'Bibliography Information',
'ea:link:ISNI_Number2':'ISNI Number',
'ea:link:VIAF_Number2':'VIAF Number',
'ea:link:NationalBibliographyNumber_Number2':'NB Number',
'ea:link:NationalBibliographyNumber_Url':'URL ΕΒΕ',
'ea:link:GeoNames':'GeoNames',
'ea:link:GeoNames_Number':'GeoNames Number',
'ea:link:GeoNames_Url':'GeoNames Url',
'ea:link:Lccn_Number':'Library of Congress Control Number',
'ea:link:Lccn_Number2':'LC number',
'ea:link:Lccn_Canceled':'Canceled or invalid number',
'ea:link:NationalBibliographyNumber_Number':'Library of Greece Control Number',
'ea:link:NationalBibliographyNumber_Canceled':'Canceled or invalid number',
'ea:link:Other_Number':'Other System Control Number',
'ea:link:Other_Number_Simple':'Control number',
'ea:link:Other_Canceled':'Canceled or invalid number',
'ea:link:ISNI_Number':'ISNI',
'ea:link:ISNI_Canceled':'Canceled or invalid number',
'ea:link:VIAF_Number':'VIAF',
'ea:link:VIAF_Canceled':'Canceled or invalid number',
'ea:link:Lccn_Url':'Lccn Url',
'ea:link:NationalBibliographyNumber_Url':'National Bibliography Url',
'ea:link:Other_Url':'Other Url',
'ea:link:ISNI_Url':'ISNI Url',
'ea:link:VIAF_Url':'VIAF Url',

/********* Cataloging Fields ********/
'ea:classification:CatalogingSource':'Cataloging source',
'ea:classification:CatalogingSource_Original':'Original cataloging agency',
'ea:classification:CatalogingSource_Modifying':'Modifying  agency',
'ea:classification:CatalogingSource_Language':'Language of cataloging',
'ea:classification:CatalogingSource_Rules':'Cataloguing rules',
'ea:classification:LCClassification':'LC Classification Number',
'ea:classification:LCClassification2':'Classification LC',
'ea:classification:LCClassification_Start':'Start Classification number',
'ea:classification:LCClassification_End':'End Classification number',
'ea:classification:DDC2':'Classification Dewey',
'ea:classification:DDC':'DD Classification Number',
'ea:classification:DDC_NumberStart':'Start Classification number',
'ea:classification:DDC_NumberEnd':'End Classification number',
'ea:classification:DDC_Edition':'Edition number',
'ea:classification:Other_Number':'Other Classification Number',
'ea:classification:Other_Number2':'Local Classification',
'ea:classification:Other_Number_Start':'Start Classification number',
'ea:classification:Other_Number_End':'End Classification number',


/********* Digital_item Fields ********/
'digital_item_header_public': 'Digital Item Fields',
'digital_item_control_fields':'Digital Item - Control Fields',
'ea:item:basic_fields':'Digital Item - Basic Fields',
'ea:item:additional_fields':'Digital Item - Information Fields',
'ea:item:technical_fields':'Digital Item - Digital Features',
'header_digital_item_access':'Digital Item - Users Rights',
'digital_item_control_status':'Digital Item - Status',
'digital_item_contributor_field':'Digital Item - Contributors',
'digital_item_subjects_fields':'Digital Item - Subjects',
'digital_item_relations_fields':'Digital Item - Relations',
'ea:item:title':'Original Title',
'ea:item:type':'Type of item',
'ea:item:location':'Location',
'ea:item:sublocation':'Sublocation',
'ea:item:collection':'Collection',
'ea:item:barcode':'Barcode, RFID etc.',
'ea:item:copyNumber':'Copy number',
'ea:item:partNumber':'Volume/Part number',
'ea:item:parent_item':'Attached to the entity',
'ea:item:Classification':'Classification',
'ea:item:ClassificationNumber':'Call Number',
'ea:item:ClassificationPrefix':'Prefix',
'ea:item:ClassificationCutter':'Cutter κλπ.',
'ea:item:accessRestrictions':'Access restrictions',
'ea:item:reproduction':'Playback restrictions',
'ea:item:binding':'Bookbinding informetion',
'ea:item:history':'History of origin',
'ea:item:acquisitionMethod':'Acquisition method',
'ea:item:acquisitionDate':'Acquisition date',
'ea:item:info':'Technical Information',
'ea:item:description':'File description',
'ea:item:filename':'Download Filename ',
'ea:item:size':'File Size',
'ea:item:software':'Playback Software',
'ea:item:page':'Dimension File',
'ea:item:urlPublic':'Public Url',
'ea:item:label':'Label',
'ea:item:urlPrivate':'Non-public Url',


/********* Physical_item Fields ********/
'physical_item_header_public': 'Physical Item',
'physical_item_control_fields':'Physical Item - Control Fields',
'physical_item_basic_fields':'Physical Item - Basic Fields',
'physical_item_characteristics_fields':'Physical Item - Characteristics',
'physical_item_additional_fields':'Physical Item - Information Fields',
'physical_item_header_access':'Physical Item - Users Rights',
'physical_item_control_status':'Physical Item - Status',
'ea:item:item_loan':'Borrowing rules',
'physical_item_contributor_field':'Physical Item - Contributors',
'physical_item_subjects_fields':'Physical Item - Subjects',
'physical_item_relations_fields':'Physical Item - Relations',
'ea:item:Relation_Equivalent':'Equivalent Relation ',
'ea:item:Relation_Descriptive':'Descriptive Relation ',
'ea:item:Relation_Wholepart':'Wholepart Relation ',
'ea:item:Accompanying':'Accompanying Relation ',


/********* Subject-Chain Fields ********/
'subject_chain_primary_subj':'Primary subject',
'subject_chain_secondary_subj':'Subdivisions',
'subject_chain_fields':'Subject Chain Fields',
'subject_chain_control_fields':'Subject Chain - Control Fields',
'subject_chain_basic_fields':'Subject Chain - Basic Fields',
'subject_chain_information_fields':'Subject Chain - Information Fields',
'subject_chain_link_fields':'Subject Chain - Link',
'subject_chain_cataloging_fields':'Subject Chain - Classification and Cataloging',
'subject_chain_relations_fields':'Subject Chain - Relation',
'subject_chain_term':'Subject chain term',
'relation_subject_chain_see_also':'Alternative name',
'relation_subject_chain_other_languages':'Subject chain in other language',


/********* Subject Fields ********/
'ea:subj:':'Subjects',
'ea:subj:Header':'Subjects',
'ea:subj:headers':'Subject headings',
'ea:subj:person-work':'Person-Work',
'ea:subj:person':'Person',
'ea:subj:work':'Work',
'ea:subj:object':'Object',
'ea:subj:event':'Event',
'ea:subj:concept':'Concept',
'ea:subj:object-collection':'Object collection',
'ea:subj:place':'Place',
'ea:subj:form':'Form',
'ea:subj:general':'General',
'ea:subj:title':'Subject title',
'ea:subj:person-work:primary':'Person-Work',
'ea:subj:person:primary':'Πρόσωπο',
'ea:subj:work:primary':'Work',
'ea:subj:object:primary':'Object',
'ea:subj:event:primary':'Event',
'ea:subj:concept:primary':'Concept',
'ea:subj:object-collection:primary':'Object',
'ea:subj:place:primary':'Place',
'ea:subj:form:primary':'Form',
'ea:subj:general:primary':'General',

/********* Others Fields ********/
'advanced_fields':'Advanced Fields',
'contributor':'Contributor',
'contributor_w':'Creator',
'contributor_e':'Contributor Expression',
'Add_Expression':'Add Expression',
'Add_Manifestation':'Add Manifestation',
'control_fields':'Control Fields',
'ea:auth:thumb_description':'Thumbnail description',
'new_place':'New Place',
'work_title_specific':'Work description',
'contributor_title_specific':'Relation note',
'relation_note':'Relation note',
'place_title_specific':'Place description',
'note_public':'Note',
'ea:relation:Comment':'Comment',


/********* Lemma ********/
'lemma_header_public': 'Lemma Fields',
'lemma_header_control':'Lemma - Control Fields',
'lemma_header_basic': 'Lemma - Basics Fields',
'lemma_header_additional': 'Lemma - Citation',
'ea:lemma:title': 'Original title',
'ea:lemma:title_in_english': 'Title in english',
'ea:lemma:alternative_title': 'Alternative title',
'ea:lemma:author': 'Author lemma',
'ea:lemma:body': 'Content',
'lemma_related_url':'Relative URL',
'ea:lemma:category': 'Category',
'ea:lemma:work':'Work lemma',
'ea:lemma:book':'Book lemma',
'ea:lemma:web_site_instance':'Web site lemma',
'ea:lemma:periodic_publication':'Periodic publication lemma',
'ea:lemma:media':'Media lemma',
'lemma_manif_citations':'Manifestation lemma',
'citation':'Citation',
'number_of_page':'Number of page',

/********* Lemma Category ********/
'lemma_category_header_public': 'Lemma Category Fields',
'lemma_category_header_control':'Lemma Category - Control Fields',
'lemma_category_header_basic': 'Lemma Category - Basics Fields',
'ea:lemma_category:title': 'Title',
'lemma_category_relation': 'Category relation',

/*********  Web Site Instance ********/
'web_site_instance_header_public':'Web Site Fields',
'web_site_instance_header_control':'Web Site - Control Fields',
'web_site_instance_header_basic':'Web Site - Basic Fields',
'web_site_instance_header_relation':'Web Site - Relations',
'web_site_instance_header_information':'Web Site - Information Fields',
'web_site_instance_header_additional':'Web Site - Additional Fields',
'web_site_instance_header_subjects':'Web Site - Keywords',
'web_site_instance_status':'Status',
'site url-base': 'Site url-base',
'site url': 'Site url',
'web_site_instance_title_proper':'Title',
'web_site_instance_title_remainder':'Title remainder',
'web_site_instance_related_url':'Related url',
'web_site_instance_publication_date':'Publication date',
'other-info':'Other info',
'web_site_instance_timestamp':'Timestamp captured',
'web_site_instance_author':'Author',
'web_site_instance_publication_name':'Publisher',
'web_site_instance_work':'Work',
'web_site_relation_other':'Relation other',

/********* Periodic Publication ********/
'periodic_publication_header_public':'Periodic Publication Fields',
'periodic_publication_header_control':'Periodic Publication - Control Fields',
'periodic_publication_header_basic':'Periodic Publication - Basic Fields',
'periodic_publication_header_relation':'Periodic Publication - Relations',
'periodic_publication_header_additional':'Periodic Publication - Additional Fields',
'periodic_publication_header_information':'Periodic Publication - Information Fields',
'periodic_publication_header_subjects':'Periodic Publication - Keywords',
'periodic_publication_status':'Status',
'ea:periodic_publication:type':'Type',
'ea:periodic_publication:channel':'Channel',

/********* Media ********/
'media_header_public':'Media Fields',
'media_header_control':'Media - Control Fields',
'media_header_basic':'Media - Basic Fields',
'media_header_relation':'Media - Relations',
'media_header_additional':'Media - Additional Fields',
'media_header_information':'Media - Information Fields',
'media_header_subjects':'Media - Keywords',
'media_status':'Status',


};























































































































