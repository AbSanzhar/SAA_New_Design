import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun, Table, TableRow, TableCell, VerticalMergeType,Footer } from "docx";
const PHONE_NUMBER = "07534563401";
const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
const EMAIL = "docx@docx.com";

export class DocumentCreator {
    // tslint:disable-next-line: typedef
    public create([experiences, educations, skills, achivements]): Document {
        const document = new Document();

        document.addSection({
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            thematicBreak: true
                        }),
                        new Paragraph({
                            children: [new TextRun({
                                text: 'F-28, I-01, 31.10.2013',
                                italics: true
                            }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            },
            children: [
                new Paragraph({
                    children: [new TextRun({
                        text: '1. Оқу- әдістеме жұмысы / Учебно-методическая работа/Academic and methodological activities',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Рет',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы, орындалу мерзімі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ, срок выполнения',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities, time frame',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс көлемі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(сағат / часы)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Workload',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(hrs)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жоспардың',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'орындалу уақыты',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Срок  выполения ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'плана',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Time frame',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жоспардың',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'орындалуы',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Фактическое',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение плана',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: '2. Ғылыми жұмыс /  Научная работа/  Research activities ',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: '2.1.тапсырыс бойынша, грант, ғылыми стипендия және т.б. – заказные, гранты, научные стипендии и др.',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Commissioned work, grants, research scholarships etc',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Рет',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'көлемі',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(тыс. тенге)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Output',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(thousand ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'tenge)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Қатысу үлесі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Доля участия, %',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Participation share, %',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'жоспар',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'план',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plan',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'орындалуы',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '2.2. Бюджеттік ҒЗЖ және СҒЗЖ жетекшілік ету - бюджетные НИР и руководство НИРС',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Budget research activities and supervision of students’ research activities',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),


                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс көлемі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Output',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'жоспар',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'план',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plan',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'орындалуы',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph(''),

                new Paragraph({
                    children: [new TextRun({
                        text: '3. Әдістеме-ұйымдастыру жұмысы / Организационно-методическая работа',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Organizational and methodological activities',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Рет',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс көлемі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Output',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'жоспар',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'план',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plan',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'орындалуы',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph(''),

                new Paragraph({
                    children: [new TextRun({
                        text: '4. Тәрбие, кәсіби бағдар беру жұмысы, қоғамдық жұмыс, кабинеттерді жабдықтау,ақылы қызмет ',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'көрсету, біліктілігін көтеру жұмысы.',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Воспитательная, профориентационная, общественная работа, работа по оказанию платных услуг,',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'оборудованию кабинетов, повышению квалификации',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Educational and social work,vocational guidance, paid services, classroom maintenance, professional ',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'development',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),




            ]
        });

        return document;
    }
}
