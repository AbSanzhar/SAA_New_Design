import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun, Table, TableRow, TableCell,
    WidthType, VerticalMergeType  } from 'docx';

export class DocumentCreator {
    public static create(PubTypeCount, UserDegreeCount, publishCount, courceCount, disMemberCount, exhibitionCount, awardCount, activityCount): Document {
        const document = new Document({
            creator: 'Men'
        });
        document.addSection({
            children: [
                new Paragraph({
                    children: [new TextRun({
                        text: 'Об утверждении Правил оказания государственной услуги "Аккредитация субъектов научной и (или) научно-технической деятельности"',
                        bold: true,
                        size: 30,
                        font: {
                            name: 'Arial',
                        },
                        color: '686868'
                    }),
                    ],
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Приказ Министра образования и науки Республики Казахстан от 12 мая 2020 года № 196. Зарегистрирован в Министерстве юстиции Республики Казахстан 13 мая 2020 года № 20626',
                            size: 22,
                            font: {
                                name: 'Arial',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Приложение 4' + '\n' + 'к Правилам оказания государственной',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    })],
                                }),
                            ],
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Рейтинговый лист субъекта',
                            size: 32,
                            font: {
                                name: 'Courier New',
                            },
                            color: '303030'
                        }),
                    ],
                    spacing: {
                        before: 225,
                    },
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '(для юридических лиц)',
                            size: 32,
                            font: {
                                name: 'Courier New',
                            },
                            color: '303030'
                        }),
                    ],
                    spacing: {
                        after: 135
                    },
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '\tНазвание субъекта:___________________________________',
                            size: 20,
                            font: {
                                name: 'Courier New',
                            },
                            color: 'black'
                        }),
                    ],
                    spacing: {
                        after: 360
                    },
                    outlineLevel: 0
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '\tЮридический адрес, телефон, факс:____________________',
                            size: 20,
                            font: {
                                name: 'Courier New',
                            },
                            color: 'black'
                        }),
                    ],
                    spacing: {
                        after: 360
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '\tГод создания:____________',
                            size: 20,
                            font: {
                                name: 'Courier New',
                            },
                            color: 'black'
                        }),
                    ],
                    spacing: {
                        after: 360
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '\tИнтернет-ресурс/e-mail:_____________________',
                            size: 20,
                            font: {
                                name: 'Courier New',
                            },
                            color: 'black'
                        }),
                    ],
                    spacing: {
                        after: 360
                    },
                }),
                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '№',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                            new TextRun({
                                                text: 'п/п',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Содержание показателей',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Единицы измерения',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Фактическое значение показателя',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '2',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '3',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '4',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 1. Сведения об организации',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ' ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Дата первичной государственной регистрации:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- до 1 года',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- от 1 - 5 лет',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- 5 и более лет',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '2',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Форма собственности:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- государственная',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- частная',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 1:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 2. Финансирование НИР ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '3',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Общий объем финансирования НИР:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- до 5000 МРП',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- от 5000 - 25000 МРП',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- свыше 25000 МРП',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '4',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Финансирование НИР в разрезе источников: ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- государственный бюджет:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ГФ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ПЦФ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- Гранты на коммерциализацию РНТД',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- гранты институтов развития, местный бюджет',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- собственные средства',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- прочие источники, в том числе иностранные',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 2:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 3. Научная и (или) научно-техническая деятельность',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '5',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Выполнено научных, научно-технических программ:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- целевые научные, научно-технические программы (ПЦФ)',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- проекты грантового финансирования (ГФ)',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- проекты коммерциализации РНТД (ГФ)',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- проекты коммерциализации РНТД, финансируемые международными организациями и фондами',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- программы и проекты, финансируемые неправительственными фондами и организациями',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- программы и проекты, финансируемые бизнесом',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 3:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 4. Научный потенциал и подготовка кадров ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '6',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Численность работников, выполнявших научные исследования и разработки, всего (специалисты- исследователи, инженерно-технические работники):',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '7',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Количество сотрудников с учеными степенями/степенью (5пункт):',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- доктор наук',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${UserDegreeCount.scienceDoctor}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- кандидат наук',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${UserDegreeCount.scienceCandidate}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- доктор философии (PhD) и докторов по профилю',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${UserDegreeCount.phillosophyDoctor}, ${UserDegreeCount.profileDoctor}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- магистр',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${UserDegreeCount.master}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '8',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Подготовка кадров:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'завкаф',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- руководство докторантами PhD (количество докторантов)',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- количество защищенных диссертаций на соискание степени доктора философии (PhD), доктора по профилю, под руководством ученых научной организации',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '9',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Участие в работе диссертационных советов:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- Председатель',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${disMemberCount.member}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- Член совета',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${disMemberCount.chairman}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '10',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Количество сотрудников, прошедших курсы повышения квалификации',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- на международном уровне',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${courceCount.international}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- на республиканском уровне',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${courceCount.republican}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '11',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Награды, премии ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- международного уровня (премии, награды)',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${awardCount.international_premium}, ${awardCount.international_award}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- государственная премия в области науки, именные научные премии',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${awardCount.state_science_premium}, ${awardCount.named_science_premium}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- государственные научные стипендии, стипендии молодым ученым/иные стипендии',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'чел.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${awardCount.state_science_scholarship}, ${awardCount.young_scientist_scholarship}/${awardCount.other_scholarship}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 4:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 5. Материально-техническая обеспеченность НИР',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '12',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Среднегодовая стоимость основных средств:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- менее 100 МРП',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- 100 - 1000 МРП',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- свыше 1000 МРП',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '0/1',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '13',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Количество лабораторий и помещений для ведения научно-исследовательских работ:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- наличие лаборатории для исследовательских работ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- наличие сертифицированной или аттестованной (аккредитованной) лаборатории:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- на международном уровне',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- на республиканском уровне',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 5:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 6. Результаты научной и научно-технической деятельности',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '14',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Объекты интеллектуальной собственности: ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- Охранные документы',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${PubTypeCount.guardDocCount}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- Авторские права',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- Международный патент, Лицензионные соглашения',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '15',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Количество опубликованных научных работ за последние 5 лет: ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- в международных рецензируемых научных журналах, входящих в 1, 2 и 3 квартиль по данным Journal Citation Reports (Джоурнал Ситэйшн Рэпортс) компании Clarivate Analytics (Кларивэйт Аналитикс), или имеющих в базе данных Scopus (Скопус) показатель процентиль по CiteScore (СайтСкор) не менее 35 хотя бы по одной из научных областей, в области социальных и гуманитарных наук, в журналах, индексируемых в базе данных Web of Science Core Collection (Уэп оф Сайнс Кор Калэкшн) (Arts and Humanities Citation Index (Артс энд Хюманитис Ситэйшн Индекс), Science Citation Index Expanded (Сайнс Ситэйшн Индекс Экспандэд), Social Sciences Citation Index (Сошл Сайнс Ситиэйшн Индекс)), компании Clarivate Analytics (Кларивэйт Аналитикс)',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${publishCount.internationalScientificJournal}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- в научных журналах, индексируемых РИНЦ и других международных базах с ненулевым импакт-фактором',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${publishCount.scientificJournal}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- в научных изданиях, рекомендованных КОКСОН МОН РК',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${publishCount.scientificPublications}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '-в материалах конференций, форумов, съездов, симпозиумов, конгрессов',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${publishCount.conferenceProceedings}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '16',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Издательская деятельность ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '-научные журналы',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '-монографии, учебники',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${PubTypeCount.monographCount}, ${PubTypeCount.textbookCount}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '-пособия, методические документы',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${PubTypeCount.allowanceCount}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '17',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Программы, проекты,  гранты, реализованные в сотрудничестве с научными организациями ближнего и дальнего зарубежья, внедрение научных достижений: ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- с зарубежной организацией',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- с республиканской организацией',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),




                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '18',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Участие в выставках ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- международный уровень',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${exhibitionCount.international}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- республиканский, региональный уровень',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${exhibitionCount.republic}, ${exhibitionCount.regional}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 6:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Блок 7. Экспертно-аналитическая, общественная деятельность, СМИ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '19',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Участие в составе рабочих групп, разработка предложений к законопроектам, нормативным правовым актам, программам и их экспертиза ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${activityCount.law_activity}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '20',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Участие в экспертизе научных, научно-технических программ, проектов, отчетов НИР, диссертаций, научных публикаций в составе редакционных коллегий журналов ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${activityCount.nir_activity}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '21',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                    verticalMerge: VerticalMergeType.RESTART
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Участие в работе съездов, конференций, симпозиумов, семинаров международного и республиканского уровня ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- модератор ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- член оргкомитета',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
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
                                                text: '- докладчик',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '22',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Количество выступлений на телевидении и радио, публикаций в журналах, газетах и электронных изданиях республиканских и местных газетах ',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'ед.',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${activityCount.smm_activity}`,
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),



                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Итого по блоку 7:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Всего:',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 20,
                                                font: {
                                                    name: 'Courier New',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),

                            ],
                        }),














                    ],
                }),
            ],
        });

        return document;
    }
}
